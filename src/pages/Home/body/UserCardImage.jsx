import { Box } from "@mui/material";
import React from "react";

const UserCardImage = ({ name, avatar }) => {
  return (
    <>
      <Box
        sx={{
          height: 150,
          width: 200,
          maxHeight: { xs: 200, md: 300 },
          maxWidth: { xs: 200, md: 300 },
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            borderRadius: "100%",
            marginTop: "10px",
          }}
          alt={`${name}'s avatar`}
          src={"https://via.placeholder.com/300"}
          //put image
        />
      </Box>
    </>
  );
};

export default UserCardImage;
