import React from "react";
import TextField from "@mui/material/TextField";

function textInput({ onChange }) {
  return (
    <TextField
      id="outlined-basic"
      label="Task Name"
      variant="outlined"
      onChange={onChange}
    />
  );
}

export default textInput;
