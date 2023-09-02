const Mode = (props: {
  name: ModeType;
  emoji: string;
  setActive: Function;
  current: ModeType;
}) => {
  return (
    <div className="group w-[13%] relative">
      <div
        onClick={() => {
          props.setActive();
        }}
        className={`shadow-lg aspect-square ${
          props.current === props.name ? "bg-green-300" : "bg-light"
        } rounded-full cursor-pointer hover:-translate-y-1 duration-150 hover:shadow-xl flex justify-center items-center md:text-3xl text-2xl`}
      >
        <span className="absolute bottom-14 scale-0 transition-all rounded bg-black p-2 text-xs text-white group-hover:scale-100">
          {props.name}
        </span>
        {props.emoji}
      </div>
    </div>
  );
};

export default Mode;
