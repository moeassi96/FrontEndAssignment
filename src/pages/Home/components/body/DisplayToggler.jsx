import { FormControl, InputLabel, NativeSelect, styled } from "@mui/material";
import React from "react";

const Wrapper = styled("div")({
  marginTop: "20px",
  marginLeft: "10px",
  width: "150px",
});

const DisplayToggler = ({ toggleCardsView, toggleTableView, isTableView }) => {
  const handleViewChange = (event) => {
    const selectedView = event.target.value;
    if (selectedView === "table") {
      toggleTableView();
    } else {
      toggleCardsView();
    }
  };

  return (
    <Wrapper>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          View
        </InputLabel>
        <NativeSelect
          value={isTableView ? "table" : "cards"}
          onChange={handleViewChange}
          inputProps={{
            name: "view",
            id: "uncontrolled-native",
          }}
        >
          <option style={{ textAlign: "center" }} value={"table"}>
            Table View
          </option>
          <option style={{ textAlign: "center" }} value={"cards"}>
            Cards View
          </option>
        </NativeSelect>
      </FormControl>
    </Wrapper>
  );
};

export default DisplayToggler;
