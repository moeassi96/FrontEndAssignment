import { Box } from "@mui/material";
import React, { useState } from "react";
import userPlaceholder from "../../../../../assets/user-placeholder.png";

const UserCardImage = ({ name, avatar }) => {
  const [imgSrc, setImgSrc] = useState(avatar);

  const handleError = (event) => {
    console.log("Error loading image:", event.target);
    setImgSrc(userPlaceholder);
  };

  return (
    <>
      <Box
        sx={{
          height: 175,
          width: 200,
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
            borderRadius: "50%",
            marginTop: "10px",
            boxSizing: "border-box",
          }}
          alt={`${name}'s avatar`}
          src={imgSrc}
          onError={handleError}
        />
      </Box>
    </>
  );
};

export default UserCardImage;
