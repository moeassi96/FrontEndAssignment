import React from "react";
import { styled } from "@mui/material";
import Logo from "../shared/Logo";

const MainContainer = styled("div")({
  background: "rgba(0,0,0,0.8)",
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",
});

const Header = ({ title }) => {
  return (
    <MainContainer>
      <Logo variant={"primary"} />
    </MainContainer>
  );
};

export default Header;
