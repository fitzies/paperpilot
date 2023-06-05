"use client";

import gpt from "@/lib/gpt";
import Textarea from "./Textarea";
import { useState } from "react";
import Selection from "./Selection";

const Form = () => {
  const [loading, setLoading] = useState(false);

  const prevokeGpt = async (data: FormData) => {
    setLoading(() => true);
    gpt(data);
    setLoading(() => false);
  };

  return (
    <form
      className="w-1/2 h-full p-4 flex flex-col gap-4 border-r-2 border-base-300"
      action={prevokeGpt}
    >
      <Textarea />

      <Selection loading={loading} />
    </form>
  );
};

export default Form;
