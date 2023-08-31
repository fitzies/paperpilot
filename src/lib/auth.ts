import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "./prisma";
import { sendVerificationEmail } from "./utils";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
        newUser: { label: "New User", type: "boolean" },
      },
      // @ts-expect-error
      async authorize(credentials, req) {
        // If signing up for the first time
        if (credentials!.newUser.toLowerCase() === "true") {
          // The email doesn't exist, so we create a new user
          const newUser = await prisma.user.create({
            data: {
              email: credentials!.email,
              password: credentials!.password,
              waitlisted: true,
            },
          });
          // Return the new user because the email didn't exist before
          await sendVerificationEmail(newUser.email);
          return newUser;
        } else {
          // If we are signing in an existing user
          // Find the existing user with the email
          const existingUser = await prisma.user.findFirst({
            where: {
              email: credentials?.email,
              password: credentials!.password,
            },
          });
          // If the user exists, return that user
          if (existingUser) {
            console.log("User does exist");
            return existingUser;
          } else {
            // If the user doesn't exist
            console.log(credentials?.password);
            console.log("User doesn't exist");
            return null;
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
};
