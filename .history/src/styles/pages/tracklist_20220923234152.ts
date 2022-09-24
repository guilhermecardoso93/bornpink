import { styled } from "@stitches/react";

export const TracklistContainer = styled("main", {
  padding: "1rem",
  width: "100%",
  maxHeight: "3rem",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "$gray200",

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
