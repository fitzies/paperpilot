"use client";

import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import LineInput from "@/components/LineInput";
import { useState } from "react";
import { isValidForm, signInWithCredentials } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Divider from "@/components/Divider";

const Page = ({ params }: { params: { slug: string } }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async () => {
    setSubmitted(() => true);
    const validForm = isValidForm(email, password);
    if (!validForm.isEmailValid) {
      toast.error("Please enter a valid email");
      setSubmitted(() => false);
      return;
    }
    if (!validForm.isPasswordValid) {
      toast.error("Please enter a valid password greater than 8 characters");
      setSubmitted(() => false);
      return;
    }
    const result = await signInWithCredentials(email, password, true);
    if (result!.url === null) {
      toast.error("This email is already assocaited with an account.");
    } else {
      router.push("/");
      router.refresh();
    }
    setSubmitted(() => false);
  };

  return (
    <div className="w-screen">
      <div className="w-1/3 mx-auto py-10 flex flex-col items-center gap-3">
        <h1 className="text-5xl font-bold my-6">Sign up</h1>
        <LineInput
          name="email"
          text="Email address"
          placeholder="Enter your email address"
          type="text"
          value={email}
          onChange={setEmail}
        />
        <LineInput
          name="password"
          text="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        {!submitted ? (
          <Button
            text="Continue with email"
            color="white"
            className="w-2/3"
            onClick={onSubmit}
          />
        ) : (
          <Button text="" color="white" loading className="w-2/3" />
        )}
        <Divider />
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
      </div>
      <p className="text-grey text-center w-1/3 mx-auto text-sm mt-8">
        By clicking &quot;Continue with Apple/Google/Email&quot; above, you
        acknowledge that you have read and understood, and agree to Paperpilots
        <span className="underline">Terms & Conditions</span>.
      </p>
    </div>
  );
};

export default Page;
