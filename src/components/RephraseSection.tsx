import { kv } from "@vercel/kv";
import Tooltip from "./Tooltip";
import { getServerUser } from "@/lib/util";

const RephraseSection = async () => {
  const user = await getServerUser();

  if (!user) {
    return (
      <div className="w-1/2 h-full py-4 px-6 flex flex-col">
        <div className="p-4 lg:text-md text-sm"></div>
      </div>
    );
  }

  const text = await kv.get<string>(user.email);

  if (text === "Not enough tokens...") {
    return (
      <div className="w-1/2 h-full py-4 px-6 flex flex-col">
        <Tooltip
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati!"
          style="p-4 mx-auto text-2xl my-auto text-gray-400 bg-base-300 rounded-2xl cursor-pointer"
        >
          {text}
        </Tooltip>
      </div>
    );
  }

  return (
    <div className="w-1/2 h-full py-4 px-6 flex flex-col">
      <div className="p-4 lg:text-md text-sm">{text}</div>
    </div>
  );
};

export default RephraseSection;
