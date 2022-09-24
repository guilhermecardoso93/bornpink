import { styled } from "@stitches/react";

export const ProductsContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  margin: '1rem',

  h3: {
    color: "$pink500",
    marginBottom: "0.2rem",
    fontWeight: 'bold'
  },

  ul: {
    listStyle: "none",
    marginBottom: "1rem",

    li: {
      marginBottom: "1rem",
    },
  },
});

export const ProductsInfo = styled('div', {
  display: 'flex',
  marginTop: "4rem",
  gap: '2rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }
})