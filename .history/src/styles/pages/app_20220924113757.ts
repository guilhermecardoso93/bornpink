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

  fontSize:'2rem',

  div: {
    display: "flex",
    gap: "1rem",
    alignItens: "center",
    justifyContent: "center",

    a: {
      textDecoration: "none",
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
      border: 'none',
      padding: '2px 4px',

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

export const HomeContainer = styled('main', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop:'10rem'
})

export const CartCount = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  background: "#00875F",
  border: "2px solid #121214",
  borderRadius: "1000px",
  width: "24px",
  height: "24px",

  flex: "none",
  order: 1,
  flexGrow: 0,
  //zIndex: 1,

  marginTop: '-50px',
  marginLeft: '30px'
});