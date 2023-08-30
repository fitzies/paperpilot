"use client";

import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import LineInput from "@/components/LineInput";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: username,
      password: password,
    });
  };

  return (
    <div className="w-screen">
      <form className="w-1/3 mx-auto py-10 flex flex-col items-center gap-3">
        <h1 className="text-5xl font-bold my-6">Sign in</h1>
        <LineInput
          name="email"
          text="Email address"
          placeholder="Enter your email address"
          type="text"
        />
        <LineInput
          name="password"
          text="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Button text="Continue with email" color="white" className="w-2/3" />
        <div className="text-grey underline mt-1 cursor-pointer">
          Forget password?
        </div>
        <Link href={"/auth/signup"} className="text-grey underline mt-1">
          Dont have an account? Create one.
        </Link>
        <div className="w-2/3 bg-gray-200 h-[2px] my-3"></div>
        <Button
          text="Continue with Google"
          color="white"
          className="w-2/3"
          borderless
          icon={<FcGoogle className="text-xl" />}
          hover
        />
        <Button
          text="Continue with Github"
          color="white"
          className="w-2/3"
          borderless
          icon={<BsGithub className="text-xl" />}
          hover
        />
      </form>
      <p className="text-grey text-center w-1/3 mx-auto text-sm mt-2">
        By clicking &quot;Continue with Apple/Google/Email&quot; above, you
        acknowledge that you have read and understood, and agree to Paperpilots
        <span className="underline">Terms & Conditions</span>.
      </p>
    </div>
  );
};

export default Page;
