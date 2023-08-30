"use client";

import { useRouter } from "next/navigation";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "white" | "black";
  className?: string;
  loading?: boolean;
  borderless?: boolean;
  icon?: JSX.Element | null;
  hover?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  size = "medium",
  color = "white",
  className = "",
  loading = false,
  borderless = false,
  icon = null,
  hover = false,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      router.push(href);
    }
  };

  const getSize = () => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-sm";
      case "large":
        return "px-6 py-3 text-lg";
      case "medium":
      default:
        return "px-4 py-2 text-md";
    }
  };

  const getColor = () => {
    switch (color) {
      case "white":
        return "hover:bg-black hover:text-white";
      case "black":
        return "bg-black text-white hover:bg-white hover:text-black";
    }
  };

  return (
    <button
      onClick={() => handleButtonClick()}
      className={`${className} ${
        borderless ? "border-2 border-light" : "border-2 border-black"
      } flex justify-center ${getSize()} ${
        hover ? "hover:-translate-y-1" : getColor()
      } rounded-lg  duration-300 items-center gap-2`}
    >
      {icon}
      {loading ? <LoadingSpinner /> : text}
    </button>
  );
};

export default Button;
