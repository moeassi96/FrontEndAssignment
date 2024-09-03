import React from "react";
import { styled } from "@mui/material";
import UserList from "./UserList";

const MainContainer = styled("div")({
  background: "rgba(255,255,255,0.8)",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  padding: "20px",
});

const HomeBody = () => {
  return (
    <MainContainer>
      <UserList></UserList>
    </MainContainer>
  );
};

export default HomeBody;
