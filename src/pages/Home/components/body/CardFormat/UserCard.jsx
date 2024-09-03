import { styled } from "@mui/material";
import React from "react";
import UserCardImage from "./UserCardImage";
import UserCardContent from "./UserCardContent";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
  border: "2px solid grey",
  borderRadius: "5px",
  maxWidth: "200px",
  height: "275px",
});
const UserCard = ({ user }) => {
  return (
    <MainContainer>
      <UserCardImage name={user.name} avatar={user.avatar} />
      <UserCardContent user={user} />
    </MainContainer>
  );
};

export default UserCard;
