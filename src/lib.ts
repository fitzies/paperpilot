"use server";
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
      content: `Please paraphrase this text by ${formData.get(
        "option"
      )} and strictly only return me the text: ${formData.get("text")}`,
    },
  ];

  const chatGPT = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });

  const chatGPTMessage = chatGPT.data.choices[0].message?.content;

  console.log(chatGPTMessage);
  return chatGPTMessage?.toString();
}

export { gpt };
