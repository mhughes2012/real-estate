import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#0C1E3F",
          light: "#1A2E5A",
          dark: "#061021",
        },
        gold: {
          DEFAULT: "#C5A059",
          light: "#D4B67C",
          dark: "#9E7D41",
        },
        white: {
          DEFAULT: "#FFFFFF",
          clean: "#F8F9FA",
          muted: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
