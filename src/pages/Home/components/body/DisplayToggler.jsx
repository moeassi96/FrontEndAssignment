import { Button, styled } from "@mui/material";
import React from "react";

const Wrapper = styled("div")({
  marginTop: "10px",
});
const DisplayToggler = ({ toggleCardsView, toggleTableView, isTableView }) => {
  return (
    <Wrapper>
      <Button
        variant="contained"
        onClick={toggleTableView}
        sx={{
          marginBottom: "20px",
          borderBottomRightRadius: "0",
          borderTopRightRadius: "0",
          background: "black",
        }}
        disabled={isTableView}
      >
        Table View
      </Button>
      <Button
        variant="contained"
        onClick={toggleCardsView}
        sx={{
          marginBottom: "20px",
          background: "black",
          borderBottomLeftRadius: "0",
          borderTopLeftRadius: "0",
        }}
        disabled={!isTableView}
      >
        Card View
      </Button>
    </Wrapper>
  );
};

export default DisplayToggler;
