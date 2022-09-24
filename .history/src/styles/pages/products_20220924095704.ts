import { styled } from "@stitches/react";

export const ProductsContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "1rem",

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
  display: "flex",
  marginTop: "4rem",
  gap: "2rem",
  
  img: {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: '6px'
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
      fontSize: '1rem',
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
        color: 'black',

        svg: {
          color: "$black",
        },
      },
    },
  },
});
