import Link from "next/link";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import { getUserFromServer } from "@/lib/utils";

const Nav = async () => {
  const user = await getUserFromServer();

  return (
    <div className="w-screen flex justify-between items-center px-10 py-6">
      <div className="w-1/3 flex justify-start items-center gap-1">
        <Link href={"/"} className="font-bold text-lg">
          Paperpilot.io
        </Link>
        <span className="italic font-bold text-lg md:block hidden"> V2</span>
      </div>
      <div className="flex gap-6 w-1/3 justify-center">
        {user && user.waitlisted === false ? (
          <Link href={"/platform"} className="md:block hidden cursor-pointer">
            Platform
          </Link>
        ) : null}
        {!user || user.waitlisted === true ? (
          <Link href={"/waitlist"} className="cursor-pointer">
            Waitlist
          </Link>
        ) : null}
        <Link href={"/pricing"} className="md:block hidden cursor-pointer">
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
