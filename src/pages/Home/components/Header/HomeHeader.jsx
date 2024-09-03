import React from "react";
import { styled } from "@mui/material";
import Logo from "../shared/Logo";

const MainContainer = styled("div")({
  background: "var(--primary-color)",
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "30px",
  boxSizing: "border-box",
});

const Header = () => {
  return (
    <MainContainer>
      <Logo variant={"primary"} />
    </MainContainer>
  );
};

export default Header;
