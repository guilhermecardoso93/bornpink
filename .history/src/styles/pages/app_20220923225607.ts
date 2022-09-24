import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  padding: "1rem 0",
  width: "100%",
  maxHeight:'3rem',
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "$gray200",

  $div : {
    gap: '2rem'
  }
});
