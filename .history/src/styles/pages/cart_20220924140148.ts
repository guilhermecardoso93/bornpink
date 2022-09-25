import { styled } from "..";

export const CartContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "40rem",
  height: "50%",
  justifyContent: "space-between",
  zindex: "4",

  bottom: "0.25rem",
  left: "0.25rem",
  right: "0.25rem",
  top: "0",
  padding: "2rem",
  overflow: "hidden",
  backgroundColor: "white",

  h1: {
    color: "$pink300",
  },
});

export const CloseCartButton = styled("div", {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",

  button: {
    background: "transparent",
    width: 36,
    height: 36,
    border: 0,
    color: "$pink500",
  },
});

export const CartContent = styled("div", {
  margin: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  width: "100%",
});

export const CartDetails = styled("div", {
  bottom: "1rem",
  display: "flex",
  marginTop: "auto",
  flexDirection: "column",

  h1: {
    display: "flex",
    justifyContent: "space-between",
    color: "$gray300",
    fontSize: "1rem",
    span: {
      fontSize: "$md",
    },
  },

  p: {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
    color: "$gray100",
    fontSize: "$lg",
    fontWeight: "bold",

    span: {
      fontSize: "$xl",
    },
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    padding: "2px 4px",

    backgroundColor: "black",
    color: "$pink400",
    fontSize: "1rem",
    textTransform: "uppercase",
    borderRadius: "6px",
    width: "100%",
    height: "3rem",
    border: "none",

    "&:not(:disabled):hover": {
      backgroundColor: "$pink400",
      color: "black",
    },
  },
});

export const CartList = styled("div", {
  display: "flex",
  flexDirection: "column",

  //flexWrap: 
});
