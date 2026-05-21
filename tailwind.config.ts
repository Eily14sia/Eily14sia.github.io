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
        "surface-deep": "#111827",
        "surface-elevated": "#1A2235",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#94a3b8",

        "glow-amber": "rgba(254, 231, 126, 0.15)",
        "star-white": "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        metropolis: ["Poppins", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "500" }],
        "nav-link": ["14px", { lineHeight: "20px", fontWeight: "500" }],
      },
      spacing: {
        "section-gap": "120px",
        "section-gap-mobile": "64px",
        "container-max-width": "1200px",
        gutter: "24px",
        base: "8px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "celestial-terminal": {
          primary: "#FEE77E",
          "primary-content": "#393000",
          secondary: "#c2c6d8",
          "secondary-content": "#2b303e",
          accent: "#FEE77E",
          "accent-content": "#080D1A",
          neutral: "#1A2235",
          "neutral-content": "#e2e2e2",
          "base-100": "#111827",
          "base-200": "#080D1A",
          "base-300": "#0a1125",
          "base-content": "#e2e2e2",
          info: "#67e8f9",
          "info-content": "#0f172a",
          success: "#00d4aa",
          "success-content": "#0f172a",
          warning: "#FEE77E",
          "warning-content": "#393000",
          error: "#ffb4ab",
          "error-content": "#690005",
        },
      },
      {
        "celestial-terminal-light": {
          primary: "#B8860B",
          "primary-content": "#ffffff",
          secondary: "#64748b",
          "secondary-content": "#f8fafc",
          accent: "#FEE77E",
          "accent-content": "#393000",
          neutral: "#e2e8f0",
          "neutral-content": "#1e293b",
          "base-100": "#FEFCF3",
          "base-200": "#FAF7F0",
          "base-300": "#F5F0E8",
          "base-content": "#1e293b",
          info: "#0284c7",
          "info-content": "#ffffff",
          success: "#059669",
          "success-content": "#ffffff",
          warning: "#d97706",
          "warning-content": "#ffffff",
          error: "#dc2626",
          "error-content": "#ffffff",
        },
      },
    ],
  },
};

export default config;
