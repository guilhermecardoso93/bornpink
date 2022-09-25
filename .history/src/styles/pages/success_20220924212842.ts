import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  height: 656,
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  h1: {
    color: '$pink400',
    fontSize: '3rem',
  },

  p:{
    marginTop: '1rem',
  },
  
  a: {
    textDecoration:'none',
    color: '$pink400',
    backgroundColor: 'black',
    padding: '6px',
    borderRadius: "6px",
    marginTop: "1rem",
  }
});

export const ImageList = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
});

export const ImageContainer = styled("div", {
  backgroundColor: '$pink300',
  padding: '1rem',
  borderRadius: "6px",

  img: {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "6px",
  },
});
