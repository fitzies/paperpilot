"use client";

import { sendVerificationEmail } from "@/lib/utils";

const ResendVerificationEmailButton = (props: { email: string }) => {
  const sendEmailBtn = async () => {
    await sendVerificationEmail(props.email);
  };

  return (
    <span onClick={() => sendEmailBtn()} className="underline cursor-pointer">
      click here
    </span>
  );
};

export default ResendVerificationEmailButton;
