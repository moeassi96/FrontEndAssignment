import React from "react";
import Groups2Icon from "@mui/icons-material/Groups2";
import { styled, Typography } from "@mui/material";

const Logo = ({ variant }) => {
  const Wrapper = styled("div")({
    display: "flex",
    flexDirection: variant === "primary" ? "row" : "column",
    gap: variant === "primary" ? "10px" : 0,
    alignItems: "center",
  });

  return (
    <Wrapper>
      <Groups2Icon
        sx={{ width: "50px", height: "50px", color: "rgba(255,255,255,0.8)" }}
      />
      <Typography
        variant="h5"
        sx={{
          marginTop: variant === "primary" ? "5px" : 0,
          color: "rgba(255,255,255,0.9)",
          fontWeight: "700",
        }}
      >
        MiniUMS
      </Typography>
    </Wrapper>
  );
};

export default Logo;
