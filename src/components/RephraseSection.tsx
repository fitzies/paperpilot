import { kv } from "@vercel/kv";

const RephraseSection = async () => {
  const text = await kv.get<string>("gpt");

  return (
    <div className="w-1/2 h-full py-4 px-6 flex flex-col">
      <div className="p-4">{text}</div>
    </div>
  );
};

export default RephraseSection;
