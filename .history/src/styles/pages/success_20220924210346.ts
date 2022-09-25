import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  height: 656,
  margin: "0 auto"
  //alignItems: "center",
  //justifyContent: "center",
  //,
  //
  //width: "100%",
});

export const ImageList = styled("div", {
  marginTop: "1rem",
  display: "flex",
  flexDirection: "row",
  gap:'2rem',
});


export const ImageContainer = styled("div", {
  marginLeft: "-2rem",
  width: "100%",
  
 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    width: '20rem',
  }
});