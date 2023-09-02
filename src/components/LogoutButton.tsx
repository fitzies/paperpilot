"use client";

import Button from "@/components/Button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const logOutBtn = async () => {
    await signOut();
  };

  return (
    <>
      <Button text="Log out" color="black" onClick={logOutBtn} />
    </>
  );
};

export default LogoutButton;
