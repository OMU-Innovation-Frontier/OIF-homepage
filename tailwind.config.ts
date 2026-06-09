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
        // Light monochrome foundation (main-aligned). The whole site is
        // black-on-white with no chromatic accents. `ink` is the semantic
        // alias for the near-black text/element color; `black` stays warm.
        black: "#0B0C0E",
        white: "#ffffff",

        // Light foundation: `paper` is the white page base, `ink` the
        // near-black text/element color, `muted` a subtle light surface.
        ink: "#0B0C0E", // primary text / elements (near-black)
        paper: "#FFFFFF", // base page background (white)
        muted: "#F4F5F7", // subtle section blocks (raised light surface)
        line: "#E5E7EB", // hairline borders on light

        // Brand accent — unified to monochrome (no color). Kept as a token so
        // the ~180 existing usages recolor in one place. `bright` is the
        // emphasis variant readable on light surfaces (mid-dark grey).
        accent: {
          DEFAULT: "#0B0C0E",
          bright: "#3F3F46",
          tint: "#F4F5F7",
        },

        // Division accents — intentionally unified (no per-division color).
        dev: {
          DEFAULT: "#0B0C0E",
          dark: "#000000",
          bright: "#3F3F46",
          tint: "#F4F5F7",
        },
        theory: {
          DEFAULT: "#0B0C0E",
          dark: "#000000",
          bright: "#3F3F46",
          tint: "#F4F5F7",
        },

        // "night" surfaces flipped to light so `bg-night-*` reads on white.
        night: {
          DEFAULT: "#FFFFFF",
          2: "#F4F5F7",
          3: "#ECEDEF",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      // Sharp corners are part of the brand identity — keep radius at 0.
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      boxShadow: {
        // Subtle elevation that adds depth without softening the corners.
        card: "0 1px 2px rgba(11,12,14,0.04), 0 12px 32px -16px rgba(11,12,14,0.18)",
        "card-hover":
          "0 2px 4px rgba(11,12,14,0.06), 0 20px 48px -20px rgba(11,12,14,0.28)",
      },
      spacing: {
        // Extended spacing for extreme whitespace
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(4%, -3%) scale(1.08)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "grid-pan": "grid-pan 6s linear infinite",
        "drift-slow": "drift 18s ease-in-out infinite",
        "drift-slower": "drift 26s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        blink: "blink 1.2s step-end infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
