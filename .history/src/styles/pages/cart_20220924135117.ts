import { styled } from "..";

export const CartContainer = styled("div", {
  display: 'flex',
  position: "absolute",
  width: "100%",
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
  justifyContent: "space-evenly",
  width:'100%',
  flexDirection: "row",
});


export const CartList = styled("div", {
  display: "flex",
})