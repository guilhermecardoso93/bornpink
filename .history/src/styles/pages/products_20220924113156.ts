import { styled } from "@stitches/react";

export const ProductsContainer = styled("main", {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: "5rem",

  h3: {
    color: "$pink500",
    marginBottom: "0.2rem",
    fontWeight: "bold",
  },

  ul: {
    listStyle: "none",
    marginBottom: "1rem",

    li: {
      marginBottom: "1rem",
    },
  },
});

export const ProductsInfo = styled("div", {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: "5rem",
  marginTop: "4rem",
  gap: "2rem",

  img: {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "6px",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      padding: "2px 4px",

      backgroundColor: "black",
      color: "$pink400",
      fontSize: "1rem",
      textTransform: "uppercase",
      borderRadius: "6px",
      width: "100%",
      height: "3rem",
      border: "none",

      svg: {
        color: "$pink400",
      },

      "&:not(:disabled):hover": {
        backgroundColor: "$pink400",
        color: "black",

        svg: {
          color: "$black",
        },
      },
    },
  },
});
