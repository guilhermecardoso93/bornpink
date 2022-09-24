import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      black: "#000000",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray400: "#4c454c",
      gray100: "#e1e1e6",

      pink500: "#f77fbe",
      pink400: "#efa7b5",
      pink300: "#ff99cc",

   },

    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
