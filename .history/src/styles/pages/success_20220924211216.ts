import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  height: 656,
  margin: "0 auto",
});

export const ImageList = styled("div", {
  marginTop: "1rem",
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
});

export const ImageContainer = styled("div", {
 

  img: {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "6px",
  },
});
