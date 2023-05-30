"use client";

import { handleTokenMultiplier } from "@/lib/helper";
import useStore from "@/store";
import { useState } from "react";

type props = {};

const Textarea = (props: props) => {
  const { tokens, setTokens } = useStore();

  const handleWords = (e: any) => {
    let temp = handleTokenMultiplier(e.target.value);
    setTokens(temp);
  };

  return (
    <div className="w-full h-full relative">
      <textarea
        className="textarea textarea-ghost w-full lg:h-full h-[80%] resize-none lg:text-md text-sm"
        name="text"
        onChange={handleWords}
      ></textarea>
    </div>
  );
};

export default Textarea;
