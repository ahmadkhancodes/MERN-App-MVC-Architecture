import React from "react";
import Paper from "@mui/material/Paper";

function header() {
  return (
    <Paper
      style={{
        margin: 0,
        textAlign: "center",
      }}
      variant="outlined"
    >
      <h1>Task Saver Application</h1>
    </Paper>
  );
}

export default header;
