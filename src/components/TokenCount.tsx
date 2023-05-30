"use client";

import useStore from "@/store";

type props = {};

const TokenCount = (props: props) => {
  const { tokens } = useStore();

  return (
    <>
      {tokens > 0 ? (
        <p className="text-sm text-gray-400 italic cursor-pointer">
          -{tokens} tokens
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default TokenCount;
