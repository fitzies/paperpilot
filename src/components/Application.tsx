"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TextInput from "./TextInput";
import { generateResponse } from "@/lib/gpt";
import Mode from "./Mode";
import { toast } from "react-toastify";

const Application = () => {
  const [text, setText] = useState<string>("");
  const [randomLikelihood, setRandomLikelihood] = useState<number>(0);
  const [canSubmit, setCanSubmit] = useState<boolean>(true);

  const [mode, setMode] = useState<ModeType>("Humanize");

  const submitTextToGpt = async () => {
    setCanSubmit(() => false);
    const result = await generateResponse(text, mode);
    if (result) {
      setText(() => result.message[0].message.content);

      const randomInteger = Math.floor(Math.random() * 11) + 1;
      setRandomLikelihood(() => randomInteger);
      setCanSubmit(() => true);
    }
    toast.error("The text was too long, please submit something shorter.");
    setCanSubmit(() => true);
  };

  const clearText = () => {
    setText(() => "");
  };

  return (
    <>
      <div className="w-screen flex md:flex-row flex-col md:justify-center md:items-start items-center gap-4">
        <TextInput text={text} onChange={setText}>
          <div className="md:w-1/2 w-11/12 absolute bottom-5 flex gap-4">
            <Mode
              name="Humanize"
              emoji="🧑"
              setActive={() => setMode(() => "Humanize")}
              current={mode}
            />
            <Mode
              name="Formalize"
              emoji="📚"
              setActive={() => setMode(() => "Formalize")}
              current={mode}
            />
            <Mode
              name="Paraphrase"
              emoji="🏳️"
              setActive={() => setMode(() => "Paraphrase")}
              current={mode}
            />
            <Mode
              name="Shorten"
              emoji="🩳"
              setActive={() => setMode(() => "Shorten")}
              current={mode}
            />
          </div>
        </TextInput>
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
