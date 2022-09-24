import { styled } from "@stitches/react";

export const TracklistContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  h4: {
    color: "$pink500",
  },

  ul: {
    listStyle: "none",
    marginBottom: "1rem",

    li: {
      gap: "10rem",

    },
  },
});
