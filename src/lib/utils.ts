import { signIn } from "next-auth/react";
import crypto from "crypto";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "./prisma";

const hashPassword = (password: string): string => {
  const salt = crypto.randomBytes(16).toString("hex"); // Generate a random salt
  const hash = crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex"); // Hash the password with the salt
  return hash;
};

async function signInWithCredentials(
  email: string,
  password: string,
  newUser: boolean
) {
  // const hashedPassword = hashPassword(password);
  const hashedPassword = password;
  let result = null;
  if (newUser) {
    result = await signIn("credentials", {
      email: email,
      password: hashedPassword,
      newUser: newUser,
      redirect: false,
      callbackUrl: "/",
    });
  } else {
    result = await signIn("credentials", {
      email: email,
      password: hashedPassword,
      newUser: newUser,
      redirect: false,
      callbackUrl: "/",
    });
  }
  return result;
}

async function getUserFromServer() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const user = await prisma.user.findFirst({
    where: { email: session?.user.email },
  });
  if (!user) {
    return null;
  }

  return user;
}

function isValidForm(email: string, password: string) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.length >= 8; // Basic password length check, modify as needed

  return { isEmailValid, isPasswordValid };
}

async function sendVerificationEmail(email: string) {
  const res = await fetch(process.env.RESEND_URL!, {
    method: "POSt",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return res.json();
}

export {
  hashPassword,
  signInWithCredentials,
  getUserFromServer,
  isValidForm,
  sendVerificationEmail,
};
