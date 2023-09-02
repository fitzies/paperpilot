import React from "react";

const TextInput = (props: {
  text: string;
  onChange: Function;
  children: JSX.Element;
}) => {
  return (
    <div className="md:w-[60%] w-[90%] md:aspect-[3/2] aspect-[1.5/2] shadow-xl px-4 py-3 rounded-lg bg-light relative">
      <textarea
        value={props.text}
        onChange={(e) => {
          props.onChange(() => e.target.value);
        }}
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint nam officia ducimus veniam recusandae quidem ipsum illum. "
        className="w-full h-full outline-none py-5 px-2 resize-none bg-transparent"
      ></textarea>
      {props.children}
    </div>
  );
};

export default TextInput;
