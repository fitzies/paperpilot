"use client";

import Alert from "@/components/Alert";
import Checkbox from "@/components/Checkbox";
import InputGroup from "@/components/InputGroup";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({ email: "", username: "", password: "" });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{
    credentialsTaken: boolean;
    incorrectFormat: boolean;
    missingFields: boolean;
  }>({ credentialsTaken: false, incorrectFormat: false, missingFields: false });

  const handleEmailInput = (e: any) => {
    const temp = { ...data };
    temp.email = e.target.value;
    setData(() => temp);
    const isValidEmail = (email: string): boolean =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (isValidEmail(e.target.value) === false) {
      let temp = { ...error };
      temp.incorrectFormat = true;
      setError(() => temp);
    }
    if (isValidEmail(e.target.value) === true) {
      let temp = { ...error };
      temp.incorrectFormat = false;
      setError(() => temp);
    }
  };

  const submit = async () => {
    setLoading(() => true);
    if (error.incorrectFormat) {
      setTimeout(() => {
        setLoading(() => false);
      }, 500);
      return;
    }

    if (
      data.email.length <= 0 ||
      data.password.length <= 0 ||
      data.username.length <= 0
    ) {
      let temp = { ...error };
      temp.missingFields = true;
      setTimeout(() => {
        setLoading(() => false);
        setError(() => temp);
      }, 500);
      console.log("a");
      return;
    }
    const res = await fetch(`https://paperpilot.vercel.app/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        username: data.username,
        password: data.password,
      }),
    });
    if (res.ok) {
      const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: true,
        callbackUrl: "/",
      });
    }
    if (!res.ok) {
      setLoading(() => false);
      let temp = { ...error };
      temp.credentialsTaken = true;
      setError(() => temp);
    }
  };

  return (
    <>
      <div className="w-screen min-h-[80vh] flex justify-center items-center">
        <div className="lg:w-1/3 w-5/6 bg-base-200 px-10 py-12 rounded-2xl flex flex-col ">
          <div className="flex flex-col gap-3 py-2">
            <h1 className="font-bold text-3xl">Create an account</h1>
            <p>
              Have an account?{" "}
              <span
                onClick={() => signIn()}
                className="text-secondary hover:underline cursor-pointer"
              >
                Sign in
              </span>
              .
            </p>
          </div>
          <InputGroup
            title="Your Email"
            type="text"
            placeholder="johndoe@gmail.com"
            onchange={handleEmailInput}
          />
          <InputGroup
            title="Your Username"
            type="text"
            placeholder="johndoe"
            onchange={(e: any) => {
              const temp = { ...data };
              temp.username = e.target.value;
              setData(() => temp);
            }}
          />
          <InputGroup
            title="Password"
            type="password"
            placeholder="●●●●●●"
            onchange={(e: any) => {
              const temp = { ...data };
              temp.password = e.target.value;
              setData(() => temp);
            }}
          />
          <div className="w-full flex justify-between items-center pb-2">
            <Checkbox text="Remember me" />
            <p className="text-sm text-gray-300 hover:text-white duration-150 cursor-pointer"></p>
          </div>
          {!loading ? (
            <button className="btn btn-secondary mt-2" onClick={submit}>
              Sign in
            </button>
          ) : (
            <button className="btn btn-secondary loading mt-2"></button>
          )}
          {error.credentialsTaken ? (
            <Alert type="error" text="Either the email or username is taken" />
          ) : null}
          {error.incorrectFormat ? (
            <Alert type="warning" text="Please enter a correct email" />
          ) : null}
          {error.missingFields ? (
            <Alert type="warning" text="Please fill in all fields" />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Page;
