import { styled } from "@mui/material";
import React from "react";
import UserCard from "./UserCard";

const ListContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  gap: "20px",
  minHeight: "100vh",
  alignItems: "baseline",
  marginTop: "20px",
});

const UserCardsList = ({ currentItems }) => {
  return (
    <>
      <ListContainer>
        {currentItems.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ListContainer>
    </>
  );
};

export default UserCardsList;
