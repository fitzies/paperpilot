"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { signOut } from "next-auth/react";

const getServerUser = async () => {
  const data: { user: { email: string } } | null = await getServerSession(
    authOptions
  );

  if (!data) return;

  const user = await prisma.user.findFirst({
    where: { email: data.user.email },
  });

  return user;
};

const updateServerUser = async (userData: any) => {
  const data: { user: { email: string } } | null = await getServerSession(
    authOptions
  );
  const updatedUser = await prisma.user.update({
    where: { email: data!.user.email },
    data: userData,
  });

  return updatedUser;
};

const deleteAccount = async (data: FormData) => {
  const deletedUser = await prisma.user.delete({
    where: { email: data.get("email")?.toString() },
  });
  await signOut();
  revalidatePath(`/account${deletedUser.username}`);
};

export { getServerUser, updateServerUser, deleteAccount };
