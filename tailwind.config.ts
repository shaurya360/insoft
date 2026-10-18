import type { Config } from "tailwindcss";

// Light theme only. Brand blue is taken from the Insoft Technology logo
// (the same #0056b3 used on printed quotations).
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  // hover: styles apply only on devices that really hover (mouse/trackpad),
  // so taps on phones never leave a card or button stuck in its hover state.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      // Motion tokens — one easing family and a small set of durations used site-wide
      // (mirrored as CSS variables in globals.css).
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.22, 1, 0.36, 1)",
        fluid: "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        DEFAULT: "220ms",
        press: "120ms",
        micro: "220ms",
        ui: "350ms",
        slow: "600ms",
      },
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
