"use client";

import useStore from "@/store";
import Dropdown from "./Dropdown";
import RephraseButton from "./RephraseButton";
import Tooltip from "./Tooltip";

type props = {};

const Selection = (props: props) => {
  const { tokens } = useStore();

  return (
    <div className="lg:w-full lg:static absolute bottom-5 lg:h-[10%] h-[20%] lg:ml-auto flex justify-end items-center px-4 lg:gap-4 gap-8">
      <Tooltip text="How many tokens it will cost you" location="bottom">
        {tokens > 0 ? (
          <p className="text-sm text-gray-400 italic cursor-pointer">
            -{tokens} tokens
          </p>
        ) : (
          ""
        )}
      </Tooltip>
      <Dropdown />
      <RephraseButton />
    </div>
  );
};

export default Selection;
