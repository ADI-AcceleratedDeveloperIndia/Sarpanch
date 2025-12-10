import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        earth: {
          50: "#f6f5f0",
          100: "#e9e6d9",
          200: "#d4ceb6",
          300: "#b8af8d",
          400: "#9d9269",
          500: "#857a56",
          600: "#6a6147",
          700: "#564f3b",
          800: "#484334",
          900: "#3f3b2f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        telugu: ["var(--font-telugu)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;


