import Dropdown from "./Dropdown";
import RephraseButton from "./RephraseButton";

type props = {};

const Selection = (props: props) => {
  return (
    <div className="lg:w-full lg:static absolute bottom-5 lg:h-[10%] h-[20%] lg:ml-auto flex justify-end items-center px-4 lg:gap-4 gap-8">
      <Dropdown />
      <RephraseButton />
    </div>
  );
};

export default Selection;
