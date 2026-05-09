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
        bg: "#0F0F0F",
        card: "#1A1A1A",
        card2: "#222222",
        border: "#2E2E2E",
        copper: "#C8843A",
        "copper-light": "#E8A84E",
        text1: "#F5F5F5",
        text2: "#9A9A9A",
        text3: "#5A5A5A",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
