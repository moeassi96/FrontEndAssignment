import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import React from "react";
import UserTableImage from "./UserTableImage";

const cellStyles = {
  fontWeight: "bold",
  fontSize: "16px",
};
const UserTable = ({ currentItems }) => {
  return (
    <>
      <TableContainer sx={{ height: "100vh", marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyles}>ID</TableCell>
              <TableCell sx={cellStyles}>First Name</TableCell>
              <TableCell sx={cellStyles}>Last Name</TableCell>
              <TableCell sx={cellStyles}>Email</TableCell>
              <TableCell sx={cellStyles}>Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell sx={{ width: "400px" }}>{user.email}</TableCell>
                <TableCell>
                  <UserTableImage name={user.name} avatar={user.avatar} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
