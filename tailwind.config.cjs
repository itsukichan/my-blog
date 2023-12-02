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
      "background-light": "#E9E9E9", // ライトモードの背景色
      "background-dark": "#0E0E0E", // ダークモードの背景色
      accent: "#46397B", // 強調色
      "secondary-accent": "#68DBB5", // 強調色のバリエーション
      support: "#949899", // 補助色
      dark: {
        "background-light": "#0E0E0E", // ダークモードでのライト背景色
        "background-dark": "#E9E9E9", // ダークモードでのダーク背景色
      },
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      "tutorial-bg": "url('/public/bg-graphic.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
