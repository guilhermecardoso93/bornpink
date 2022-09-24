import { globalCss } from ".";
import logo from '../../src/public/bornpinkbanner.png'


export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: "$black",
    backgroundImage: `url('./bornpinkbanner.png')`,
    color: "$black",
    "-webkit-font-smoothing": "antialiased",
    cursor:'pointer',
    margin: '0 auto',
    padding: '4rem'
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});