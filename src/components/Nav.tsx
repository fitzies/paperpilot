import Link from "next/link";
import Button from "./Button";

type NavItem = { name: string; link: string };

const Nav = () => {
  const items: NavItem[] = [
    { name: "Platform", link: "/platform" },
    { name: "Waitlist", link: "/waitlist" },
    { name: "Pricing", link: "/pricing" },
  ];

  return (
    <div className="w-screen flex justify-between px-10 py-6">
      <div className="w-1/3  flex justify-start">
        <Link href={"/"} className="font-bold text-lg">
          Paperpilot.io <span className="italic"> V2</span>
        </Link>
      </div>
      <div className="flex gap-6 w-1/3 justify-center">
        {items.map((item: NavItem) => {
          return (
            <Link href={item.link} className="cursor-pointer" key={item.name}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="w-1/3 flex justify-end">
        <Button text="Sign in" href="/auth/signin" />
      </div>
    </div>
  );
};

export default Nav;
