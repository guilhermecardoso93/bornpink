import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  height: 656,
  margin: "0 auto",
});

export const ImageList = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  gap: "1rem",
  margin: '1rem 2rem 2rem 2rem',
  marginTop: "1rem",

});

export const ImageContainer = styled("div", {
  backgroundColor: '$pink300',
  padding: '1rem',
  borderRadius: "6px",
  boxShadow:
  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

  img: {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "6px",
  },
});
