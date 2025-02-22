/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      primary: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065",
      },
      secondary: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      background: {
        light: "#ffffff",
        dark: "#121212",
      },
      accent: {
        DEFAULT: "#6A1B9A", // ライトモードの強調色 (紫)
        dark: "#AB47BC", // ダークモードの強調色 (明るい紫)
      },
      "secondary-accent": {
        DEFAULT: "#2E7D32", // ライトモードの強調色のバリエーション (緑)
        dark: "#66BB6A", // ダークモードの強調色のバリエーション (明るい緑)
      },
      support: {
        DEFAULT: "#7A7D7E", // ライトモードの補助色
        dark: "#B0BEC5", // ダークモードの補助色
      },
      dark: {
        "background-light": "#121212", // ダークモードでのライト背景色
        "background-dark": "#FFFFFF", // ダークモードでのダーク背景色
      },
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      "tutorial-bg": "url('/public/bg-graphic.jpg')",
    },
    animation: {
      "fade-in": "fade-in 0.5s ease-out",
      "slide-in": "slide-in 0.5s ease-out",
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "slide-in": {
        "0%": { transform: "translateY(10px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
