import { List } from "@mui/material";
import React from "react";
import UserCardContentItem from "./UserCardContentItem";

const UserCardContent = ({ user }) => {
  return (
    <List sx={{ width: "100%", paddingX: "10px", boxSizing: "border-box" }}>
      <UserCardContentItem field="Id: " value={user.id} />
      <UserCardContentItem
        field="Name: "
        value={`${user.firstname} ${user.lastname}`}
      />
      <UserCardContentItem field="Email: " value={user.email} />
    </List>
  );
};

export default UserCardContent;
