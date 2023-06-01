"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Tooltip from "./Tooltip";
import Link from "next/link";

const UserDropDown = () => {
  const { data: session } = useSession();

  return (
    <>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={`https://api.dicebear.com/6.x/identicon/svg?seed=${
              session?.user.avatar ?? session?.user?.email
            }`}
            alt="profilepicture"
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-40 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={`/account/${session?.user.username}`}>Account</Link>
        </li>
        <li>
          <Link href="/pricing" className="justify-between">
            Pricing
            <span className="badge">New</span>
          </Link>
        </li>
        <li onClick={() => signOut()}>
          <a>Logout</a>
        </li>
      </ul>
    </>
  );
};

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-100 pt-3 px-6">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          paper pilot
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          {session && session.user ? (
            <div className="flex justify-center items-center gap-4">
              <Tooltip text="How many tokens you have" location="bottom">
                <div className="bg-base-200 text-sm p-2 rounded-full cursor-pointer">
                  {session.user.tokens}
                </div>
              </Tooltip>
              <UserDropDown />
            </div>
          ) : (
            <button className="btn" onClick={() => signIn()}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
