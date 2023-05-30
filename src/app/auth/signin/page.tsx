"use client";

import InputGroup from "@/components/InputGroup";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import Checkbox from "@/components/Checkbox";
import Link from "next/link";

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
      <div className="w-1/3 bg-base-200 px-10 py-12 rounded-2xl flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl">Sign in to your account</h1>
          <p>
            Dont have an account?
            <Link
              href="/auth/signup"
              className="text-secondary hover:underline"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
        <InputGroup
          title="Your Username"
          type="text"
          placeholder="johndoe"
          onchange={(e: any) => {
            username.current = e.target.value;
          }}
        />
        <InputGroup
          title="Password"
          type="password"
          placeholder="●●●●●●"
          onchange={(e: any) => {
            password.current = e.target.value;
          }}
        />
        <div className="w-full flex justify-between items-center">
          <Checkbox text="Remember me" />
          <p className="text-sm text-gray-300 hover:text-white duration-150 cursor-pointer">
            Forgot password
          </p>
        </div>
        <button className="btn btn-secondary">Sign in</button>
      </div>
    </div>
  );
};

export default Page;
