import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: "#0071E3",
          hover: "#005BB5",
          gray: "#F5F5F7",
          border: "#E5E5EA",
          text: "#111111",
          sub: "#4B5563"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
