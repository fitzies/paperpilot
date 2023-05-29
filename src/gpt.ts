"use server";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

async function gpt(formData: FormData) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API,
  });

  const openai = new OpenAIApi(configuration);

  let messages: ChatCompletionRequestMessage[] = [
    {
      role: "system",
      content: "You are Quillbot, paraphrase the text that I give you.",
    },
    {
      role: "user",
      content: `Please ${formData.get("option")} this text: ${formData.get(
        "text"
      )}`,
    },
  ];

  const chatGPT = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });

  const chatGPTMessage = chatGPT.data.choices[0].message?.content;

  await kv.set("gpt", chatGPTMessage?.toString());
  revalidatePath("/");
}

export default gpt;
