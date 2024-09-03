import { styled, Typography } from "@mui/material";
import React from "react";

const MainContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  padding: "10px",
  background: "rgba(0,0,0,0.2)",
  boxSizing: "border-box",
});

const FooterCopyright = () => {
  return (
    <MainContainer>
      <Typography>@ 2024 MiniUMS. All Rights Reserved.</Typography>
    </MainContainer>
  );
};

export default FooterCopyright;
