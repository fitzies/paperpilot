import { useEffect, useState } from "react";

type RadialProgressProps = { percent: number };

const RadialProgress = ({ percent = 0 }: RadialProgressProps) => {
  const circumference = 30 * 2 * Math.PI;

  return (
    <div className="w-1/2 flex justify-center items-center scale-[1.5] my-3">
      <div className="inline-flex items-center justify-center overflow-hidden rounded-full">
        <svg className="w-20 h-20">
          <circle
            className="text-gray-300"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
          <circle
            className="text-black"
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
        </svg>
        <span className="absolute text-xl text-black">{`${percent}%`}</span>
      </div>
    </div>
  );
};

export default RadialProgress;
