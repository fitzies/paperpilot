"use client";

import Dropdown from "./Dropdown";
import RephraseButton from "./RephraseButton";
import Tooltip from "./Tooltip";
import TokenCount from "./TokenCount";

type props = {
  loading: boolean;
};

const Selection = (props: props) => {
  return (
    <div className="lg:w-full lg:static absolute bottom-5 lg:h-[10%] h-[20%] lg:ml-auto flex justify-end items-center px-4 lg:gap-4 gap-8">
      <Tooltip text="How many tokens it will cost you" location="bottom">
        <TokenCount />
      </Tooltip>
      <Dropdown />
      <RephraseButton loading={props.loading} />
    </div>
  );
};

export default Selection;
