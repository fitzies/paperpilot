import { HTMLInputTypeAttribute } from "react";

type LineInputProps = {
  name: string;
  text: string;
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string;
};

const LineInput = ({ name, text, type, placeholder }: LineInputProps) => {
  return (
    <>
      <div className="flex flex-col w-2/3 gap-1">
        <p className="text-gray-400">{text}</p>
        <input
          name={name}
          type={type}
          className="bg-light px-3 py-2 rounded-lg"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default LineInput;
