"use client";

import Modal from "@/components/Modal";
import Tooltip from "@/components/Tooltip";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const Page = ({ params }: { params: { username: string } }) => {
  const { data: session } = useSession();

  if (params.username === "undefined") {
    redirect("/");
  }

  if (session?.user.username !== params.username) {
    redirect(`/account/${session?.user.username}`);
  }

  const [deleteCredentials, setDeleteCredentials] = useState<string>("");

  const deleteAccount = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/api/user/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: deleteCredentials,
      }),
    });
    if (res.ok) {
      signOut();
      redirect("/");
    }
  };

  return (
    <div className="w-screen flex flex-col justify-center items-start gap-4 p-12 px-24">
      <Modal
        htmlFor="deleteAccount"
        title="Are you sure you want to delete your account?"
        text="This action cannot be undone and will result in a permanent loss of all your account information."
      >
        <div className="flex gap-3 items-center py-2">
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered w-1/2"
            value={deleteCredentials}
            onChange={(e) => setDeleteCredentials(() => e.target.value)}
          />
          {deleteCredentials === session.user.email ? (
            <button
              className="btn btn-active btn-error"
              onClick={deleteAccount}
            >
              delete my account
            </button>
          ) : null}
        </div>
      </Modal>
      <div className="flex gap-4 justify-center items-center">
        <div className="w-20 rounded-full">
          <img
            src={`https://api.dicebear.com/6.x/identicon/svg?seed=${
              session.user.avatar ?? session.user.email
            }`}
            alt="profilepicture"
          />
        </div>
        <h1 className="font-bold text-4xl text-center">
          @{session.user.username}
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aperiam.
      </p>
      <div className="flex gap-2">
        <Tooltip text="Coming soon" location="top">
          <button className="btn btn-active btn-ghost">change username</button>
        </Tooltip>
        <Tooltip text="Coming soon" location="top">
          <button className="btn btn-active btn-ghost">change avatar</button>
        </Tooltip>
        <button className="btn btn-active btn-secondary text-white">
          {session.user.tokens} tokens
        </button>
        <Link href="/pricing" className="btn btn-active btn-ghost">
          buy tokens
        </Link>
        <label className="btn btn-active btn-error" htmlFor="deleteAccount">
          delete my account
        </label>
      </div>
    </div>
  );
};

export default Page;
