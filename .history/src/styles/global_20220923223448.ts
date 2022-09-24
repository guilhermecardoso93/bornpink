import { globalCss } from ".";


export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: "$white",
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    backgroundImage: `url('https://media.pitchfork.com/photos/632893bb52d4bd45efccbb9b/3:2/w_1998,h_1332,c_limit/BLACKPINK-%20Born%20Pink.jpg') `,

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