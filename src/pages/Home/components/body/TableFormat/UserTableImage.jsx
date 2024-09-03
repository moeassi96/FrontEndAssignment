import { Box } from "@mui/material";
import React, { useState } from "react";
import userPlaceholder from "../../../../../assets/user-placeholder.png";

const UserTableImage = ({ name, avatar }) => {
  const [imgSrc, setImgSrc] = useState(avatar);

  const handleError = (event) => {
    console.log("Error loading image:", event.target);
    setImgSrc(userPlaceholder);
  };

  return (
    <>
      <Box
        component="img"
        sx={{
          height: 50,
          width: 50,
          borderRadius: "50%",
        }}
        alt={`${name}'s avatar`}
        src={imgSrc}
        onError={handleError}
      />
    </>
  );
};

export default UserTableImage;
