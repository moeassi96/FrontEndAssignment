import { styled } from "@mui/material";
import React from "react";
import UserCardImage from "./UserCardImage";
import UserCardContent from "./UserCardContent";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
  border: "1px solid",
  maxWidth: "200px",
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
