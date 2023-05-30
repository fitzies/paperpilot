"use client";

import InputGroup from "@/components/InputGroup";
import { signIn } from "next-auth/react";
import { useRef } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const username = useRef<string>();
  const password = useRef<string>();

  const submit = async () => {
    const result = await signIn("credentials", {
      username: username.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="w-screen min-h-[80vh] flex justify-center items-center">
      <div className="w-1/3 bg-base-200 p-8 rounded-2xl flex flex-col gap-4">
        <h1 className="font-bold text-3xl mx-auto">Sign in</h1>
        <InputGroup
          title="Your Email"
          label="Email"
          type="text"
          placeholder="johndoe@gmail.com"
          onchange={(e: any) => {
            username.current = e.target.value;
          }}
        />
        <InputGroup
          title="Password"
          label="Password"
          type="password"
          placeholder="●●●●●●"
          onchange={(e: any) => {
            password.current = e.target.value;
          }}
        />
        <button className="btn btn-success mt-8 mx-4" onClick={submit}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Page;
