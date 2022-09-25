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
  margin: "1rem",
  display: "flex",
  justifyContent: "space-evenly",
  width:'100%',
  flexDirection: "row",
  gap: "1rem",
});

export const CartDetails = styled("div", {
  bottom: "1rem",
  display: "flex",
  marginTop: "auto",
  marginBottom: "8rem",
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
    marginTop: "3.5rem",
    width: "100%",
    bottom: "3rem",
    height: 69,

    border: 0,
    borderRadius: 8,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "$green500",
    color: "White",

    fontSize: "$md",
    fontWeight: "bold",
  },
});


export const CartList = styled("div", {
  display: "flex",
})