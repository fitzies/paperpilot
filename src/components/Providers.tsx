"use client";

import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

const Providers = (props: { children: any }) => {
  return (
    <>
      <ToastContainer />
      <SessionProvider>{props.children}</SessionProvider>
    </>
  );
};

export default Providers;
