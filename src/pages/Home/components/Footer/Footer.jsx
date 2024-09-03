import React from "react";
import { styled } from "@mui/material";
import FooterHeader from "./FooterHeader.jsx";
import FooterContent from "./FooterContent.jsx";
import FooterCopyright from "./FooterCopyright.jsx";

const MainContainer = styled("div")({
  background: "rgba(0,0,0,0.8)",
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "rgba(255,255,255,0.8)",
});

const HomeFooter = () => {
  return (
    <MainContainer>
      <FooterHeader />
      <FooterContent />
      <FooterCopyright />
    </MainContainer>
  );
};

export default HomeFooter;
