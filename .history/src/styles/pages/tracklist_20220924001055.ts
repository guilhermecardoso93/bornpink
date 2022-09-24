import { styled } from "@stitches/react";

export const TracklistContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  ul: {
    listStyle: "none",
    gap: '1rem',

    li: {
      gap: '1rem'
    }
  }
});
