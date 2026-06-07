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
        // Warm near-black "ink" replaces pure black globally for a softer,
        // more premium feel. `black` is intentionally remapped so the entire
        // site (text / borders / dark sections / buttons) warms up at once.
        // `ink` is the semantic alias to prefer in new code.
        black: "#0B0C0E",
        white: "#ffffff",

        // Dark "Frontier OS" foundation (v2 — site-wide dark theme).
        // `ink` is the primary text/element color (now light), `paper` is the
        // dark page base, `muted` a slightly raised dark surface.
        ink: "#E8E9EC",
        paper: "#0A0B0E", // base page background (dark)
        muted: "#101218", // subtle section blocks (raised dark surface)
        line: "#23272F", // hairline borders on dark

        // Brand signature accent (used for primary actions & highlights)
        accent: {
          DEFAULT: "#4F46E5", // indigo-600
          bright: "#A5B4FC", // for dark backgrounds
          tint: "#EEF0FF",
        },

        // Division accents — single source of truth per division
        dev: {
          DEFAULT: "#2563EB", // blue-600
          dark: "#1E3A8A", // blue-900
          bright: "#60A5FA", // for dark backgrounds
          tint: "#EEF3FF",
        },
        theory: {
          DEFAULT: "#C0271C",
          dark: "#991B1B", // red-800
          bright: "#F87171", // for dark backgrounds
          tint: "#FCF1F0",
        },

        // "Frontier OS" dark surfaces (v2 exploration)
        night: {
          DEFAULT: "#0A0B0E",
          2: "#101218",
          3: "#171A22",
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
  plugins: [],
};

export default config;
