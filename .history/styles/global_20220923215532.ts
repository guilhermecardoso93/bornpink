import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: "$white",
    color: "$black",
    "-webkit-font-smoothing": "antialiased",
    cursor:'pointer',
    margin: '0 auto',
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});