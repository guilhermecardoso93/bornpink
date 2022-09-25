import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  width: "100%",
  maxHeight: "3rem",
  maxWidth: 1180,
  margin: "2rem auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  fontSize: "2rem",

  div: {
    display: "flex",
    gap: "1rem",
    alignItens: "center",
    justifyContent: "center",

    a: {
      textDecoration: "none",
      textSize: '1.5rem',
      color: "$gray800",

      "&:not(:disabled):hover": {
        color: "$pink400",
      },
    },

    button: {
      backgroundColor: "black",
      borderRadius: "6px",
      width: "2rem",
      height: "auto",
      border: "none",
      padding: "2px 4px",

      svg: {
        color: "$pink400",
      },

      "&:not(:disabled):hover": {
        backgroundColor: "$pink400",

        svg: {
          color: "$black",
        },
      },
    },
  },
});

export const HomeContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10rem",
});

export const CartCount = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  fontSize: '1.3rem',

  background: "$pink300",
  border: "none",
  borderRadius: "1000px",
  padding:'10px',
  width: "24px",
  height: "24px",

  flex: "none",
  order: 1,
  flexGrow: 0,
  marginTop: "-10px",
  marginLeft: "-25px",
});


export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});
