import { NextResponse } from "next/server";
import Email from "@/components/Email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  const req = await request.json();

  try {
    const data = await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: req.email,
      subject: "Email verification",
      react: Email(process.env.URL!.toString() + "/verify?email=" + req.email),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
