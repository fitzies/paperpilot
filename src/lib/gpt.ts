"use server";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { getServerUser, updateServerUser } from "./actions";
import { handleTokenMultiplier } from "./helper";

async function gpt(formData: FormData) {
  const user = await getServerUser();
  if (!user) return;

  const token_cost = handleTokenMultiplier(formData.get("text")!.toString());

  if (user?.tokens < token_cost) {
    await kv.set(user.email, "Not enough tokens...");
    revalidatePath("/");
    return;
  }

  const updatedUser = await updateServerUser({
    tokens: user.tokens - token_cost,
  });

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

  // await kv.set(auth, chatGPTMessage?.toString());
  await kv.set(user.email, chatGPTMessage?.toString());
  revalidatePath("/");
}

export default gpt;
