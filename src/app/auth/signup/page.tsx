import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import LineInput from "@/components/LineInput";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen">
      <form className="w-1/3 mx-auto py-10 flex flex-col items-center gap-3">
        <h1 className="text-5xl font-bold my-6">Sign up</h1>
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
        <div className="w-2/3 bg-gray-200 h-[2px] my-6"></div>
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
      <p className="text-grey text-center w-1/3 mx-auto text-sm mt-8">
        By clicking &quot;Continue with Apple/Google/Email&quot; above, you
        acknowledge that you have read and understood, and agree to Paperpilots
        <span className="underline">Terms & Conditions</span>.
      </p>
    </div>
  );
};

export default Page;
