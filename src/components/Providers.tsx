"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type props = {
  children: ReactNode;
};

const Providers = (props: props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default Providers;
