import { Grid2, ListItem, Tooltip, Typography } from "@mui/material";
import React from "react";

const UserCardContentItem = ({ field, value }) => {
  return (
    <ListItem sx={{ padding: "4px" }}>
      <Grid2 container alignItems="center">
        <Grid2 sx={{ width: "50px" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {field}
          </Typography>
        </Grid2>

        <Grid2 sx={{ flexGrow: 1 }}>
          <Tooltip title={value} arrow>
            <Typography
              sx={{
                maxWidth: "100px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "default",
                fontSize: "12px",
              }}
            >
              {value}
            </Typography>
          </Tooltip>
        </Grid2>
      </Grid2>
    </ListItem>
  );
};

export default UserCardContentItem;
