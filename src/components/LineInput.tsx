"use client";

import { HTMLInputTypeAttribute } from "react";

type LineInputProps = {
  name: string;
  text: string;
  type: HTMLInputTypeAttribute | undefined;
  placeholder: string;

  value?: string;
  onChange?: (value: string) => void;
};

const LineInput = ({
  name,
  text,
  type,
  placeholder,
  value,
  onChange,
}: LineInputProps) => {
  return (
    <>
      <div className="flex flex-col w-2/3 gap-1">
        <p className="text-gray-400">{text}</p>
        {value !== undefined && onChange !== undefined ? (
          <input
            name={name}
            type={type}
            className="bg-light px-3 py-2 rounded-lg"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <input
            name={name}
            type={type}
            className="bg-light px-3 py-2 rounded-lg"
            placeholder={placeholder}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
        )}
      </div>
    </>
  );
};

export default LineInput;
