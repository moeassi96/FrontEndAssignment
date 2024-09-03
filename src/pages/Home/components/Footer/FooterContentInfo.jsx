import { styled, Typography } from "@mui/material";
import React from "react";

const MainContainer = styled("div")({
  width: "50%",
});

const FooterContentInfo = () => {
  return (
    <MainContainer>
      <Typography
        variant="h6"
        sx={{
          paddingY: "16px",
          fontWeight: "600",
        }}
      >
        MiniUMS
      </Typography>
      <Typography sx={{ maxWidth: "80%" }}>
        MiniUMS is a user management system designed to help you easily manage
        user data, roles, and permissions. With a focus on simplicity and
        security, MiniUMS ensures efficient user administration for your
        organization.
      </Typography>
    </MainContainer>
  );
};

export default FooterContentInfo;
