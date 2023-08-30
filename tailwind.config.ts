import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stem: "Stem Medium",
      },
      colors: {
        grey: "#a1a1a1",
        light: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
export default config;
