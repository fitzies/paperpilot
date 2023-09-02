import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API, // defaults to process.env["OPENAI_API_KEY"]
});

export async function POST(request: Request) {
  const req = await request.json();
  const text = req.data;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are Quillbot, you paraphrase the text that I give you.",
      },
      {
        role: "user",
        content: text,
      },
    ],
    model: "gpt-4",
    // model: "gpt-3.5-turbo",
  });

  return NextResponse.json({ message: completion.choices });
}
