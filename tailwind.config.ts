import type { Config } from "tailwindcss";

// Light theme only. Brand blue is taken from the Insoft Technology logo
// (the same #0056b3 used on printed quotations).
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0056b3",
          dark: "#00468f",
          light: "#eaf1fa",
          line: "#c9daf0",
        },
        ink: {
          DEFAULT: "#1f2328",
          soft: "#3d4450",
          muted: "#5b6470",
        },
        line: "#e3e6ea",
        paper: "#f7f8fa",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
