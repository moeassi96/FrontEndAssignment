import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Typography } from "@mui/material";

const FooterContentContactInfo = () => {
  return (
    <List sx={{ padding: "0px" }}>
      <Typography variant="h6" sx={{ padding: "16px", fontWeight: "600" }}>
        Contact
      </Typography>
      <ListItem sx={{ paddingY: "0px" }}>
        <ListItemIcon sx={{ minWidth: "30px" }}>
          <LocationOnIcon sx={{ color: "rgba(255,255,255,0.8)" }} />
        </ListItemIcon>
        <ListItemText primary="123 Main Street, Anytown, USA" />
      </ListItem>
      <ListItem sx={{ paddingY: "0px" }}>
        <ListItemIcon sx={{ minWidth: "30px" }}>
          <EmailIcon sx={{ color: "rgba(255,255,255,0.8)" }} />
        </ListItemIcon>
        <ListItemText primary="contact@miniums.com" />
      </ListItem>
      <ListItem sx={{ paddingY: "0px" }}>
        <ListItemIcon sx={{ minWidth: "30px" }}>
          <PhoneIcon sx={{ color: "rgba(255,255,255,0.8)" }} />
        </ListItemIcon>
        <ListItemText primary="(123) 456-7890" />
      </ListItem>
    </List>
  );
};

export default FooterContentContactInfo;
