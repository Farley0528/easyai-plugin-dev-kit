// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import { customTheme } from "./utils/customTheme";

function generateThemeColorScale(colorName) {
  const rgbValue = hexToRgb(customTheme.colors[colorName]);
  return {
    [`theme-${colorName}`]: {
      DEFAULT: `oklch(from rgb(${rgbValue}) l c h)`,
      50: `oklch(from rgb(${rgbValue}) calc(l + 0.3) calc(c * 0.2) h)`,
      100: `oklch(from rgb(${rgbValue}) calc(l + 0.25) calc(c * 0.3) h)`,
      200: `oklch(from rgb(${rgbValue}) calc(l + 0.2) calc(c * 0.4) h)`,
      300: `oklch(from rgb(${rgbValue}) calc(l + 0.1) calc(c * 0.6) h)`,
      400: `oklch(from rgb(${rgbValue}) calc(l + 0.05) calc(c * 0.8) h)`,
      500: `oklch(from rgb(${rgbValue}) l c h)`,
      600: `oklch(from rgb(${rgbValue}) calc(l - 0.05) calc(c * 0.9) h)`,
      700: `oklch(from rgb(${rgbValue}) calc(l - 0.1) calc(c * 0.8) h)`,
      800: `oklch(from rgb(${rgbValue}) calc(l - 0.15) calc(c * 0.7) h)`,
      900: `oklch(from rgb(${rgbValue}) calc(l - 0.2) calc(c * 0.6) h)`,
    },
  };
}

// 辅助函数：将十六进制颜色转换为 RGB 格式
function hexToRgb(hex) {
  // 移除 # 号（如果存在）
  hex = hex.replace(/^#/, "");

  // 解析十六进制值
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}

const colorTheme = {
  ...generateThemeColorScale("primary"),
  ...generateThemeColorScale("success"),
  ...generateThemeColorScale("warning"),
  ...generateThemeColorScale("error"),
  ...generateThemeColorScale("info"),
  ...generateThemeColorScale("background"),
  ...generateThemeColorScale("surface"),
};

module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: colorTheme,
    },
  },
  corePlugins: {
    // 可按需关闭某些插件，减少生成类
    // preflight: false, // 如果你不想覆盖 base 样式
  },
  plugins: [],
  blocklist: [
    // /^bg-theme-/,
    // /^text-theme-/,
    // /^border-theme-/,
    // /^hover:bg-theme-/,
    // /^hover:text-theme-/,
  ],
};
