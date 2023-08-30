import React from "react";

const TextInput = (props: { text: string; onChange: Function }) => {
  return (
    <div className="w-[60%] aspect-[3/2] shadow-xl px-4 py-3 rounded-lg bg-light">
      <textarea
        value={props.text}
        onChange={(e) => {
          props.onChange(() => e.target.value);
        }}
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint nam officia ducimus veniam recusandae quidem ipsum illum. "
        className="w-full h-full outline-none py-5 px-2 resize-none bg-transparent"
      ></textarea>
    </div>
  );
};

export default TextInput;
