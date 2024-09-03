import { styled } from "@mui/material";
import React from "react";

import FooterContentInfo from "./FooterContentInfo";
import FooterContentContactInfo from "./FooterContentContactInfo";

const MainContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
});

const ContentBox = styled("div")({
  width: "80%",
  display: "flex",
  justifyContent: "center",
});

const FooterContent = () => {
  return (
    <MainContainer>
      <ContentBox>
        <FooterContentInfo />
        <FooterContentContactInfo />
      </ContentBox>
    </MainContainer>
  );
};

export default FooterContent;
