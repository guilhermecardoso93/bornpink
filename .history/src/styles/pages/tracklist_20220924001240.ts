import { styled } from "@stitches/react";

export const TracklistContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: '1rem',

  h4: {
    color: "$pink500",
  },

  ul: {
    listStyle: "none",
    marginBottom: "1rem",

    li: {
      gap: "1rem",
    },
  },
});
