import React from "react";
import DUMMY_USERS from "./DummyUserList.jsx";
import { styled } from "@mui/material";
import UserCard from "./UserCard.jsx";

const MainContainer = styled("div")({ width: "100%" });
const ListContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  width: "100%",
  gap: "20px",
});

const UserList = () => {
  return (
    <MainContainer>
      <ListContainer>
        {DUMMY_USERS.map((user) => {
          return <UserCard key={user.id} user={user}></UserCard>;
        })}
      </ListContainer>
    </MainContainer>
  );
};

export default UserList;
