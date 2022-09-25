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
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  gap: "1rem",

  minHeight: 216,
  margin: "0 auto",
  marginBottom: "10px",

  img: {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "6px",
  },
});
