"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TextInput from "./TextInput";
import { generateResponse } from "@/lib/gpt";

const Application = () => {
  const [text, setText] = useState<string>("");
  const [randomLikelihood, setRandomLikelihood] = useState<number>(0);
  const [canSubmit, setCanSubmit] = useState<boolean>(true);

  const submitTextToGpt = async () => {
    setCanSubmit(() => false);
    const result = await generateResponse(text);
    if (result) {
      setText(() => result.message[0].message.content);

      const randomInteger = Math.floor(Math.random() * 11) + 1;
      setRandomLikelihood(() => randomInteger);
      setCanSubmit(() => true);
    }
  };

  const clearText = () => {
    setText(() => "");
  };

  return (
    <>
      <div className="w-screen flex justify-center gap-4">
        <TextInput text={text} onChange={setText} />
        <Sidebar
          onSubmit={() => submitTextToGpt()}
          canSubmit={canSubmit}
          onClear={() => clearText()}
          percentGenerated={randomLikelihood}
        />
      </div>
    </>
  );
};

export default Application;
