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
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9f1239",
          900: "#831843",
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


