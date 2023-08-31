import Link from "next/link";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import { getUserFromServer } from "@/lib/utils";

const Nav = async () => {
  const user = await getUserFromServer();

  return (
    <div className="w-screen flex justify-between px-10 py-6">
      <div className="w-1/3  flex justify-start">
        <Link href={"/"} className="font-bold text-lg">
          Paperpilot.io <span className="italic"> V2</span>
        </Link>
      </div>
      <div className="flex gap-6 w-1/3 justify-center">
        {user && user.waitlisted === false ? (
          <Link href={"/platform"} className="cursor-pointer">
            Platform
          </Link>
        ) : null}
        {!user || user.waitlisted === true ? (
          <Link href={"/waitlist"} className="cursor-pointer">
            Waitlist
          </Link>
        ) : null}
        <Link href={"/pricing"} className="cursor-pointer">
          Pricing
        </Link>
      </div>

      <div className="w-1/3 flex justify-end">
        {/* {status === "loading" ? <Button loading text="Sign in" /> : null} */}
        {!user ? (
          <Button text="Sign in" href="/auth/signin" />
        ) : user ? (
          <Button text="Account" href="/account" />
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
