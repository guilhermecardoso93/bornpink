import { styled } from "@stitches/react";

export const TracklistContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  h4: {
    color: "$pink500",
    marginBottom: "0.2rem"
  },

  ul: {
    listStyle: "none",
    marginBottom: "1rem",

    li: {
    },
  },
});
