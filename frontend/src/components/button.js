import * as React from "react";
import Button from "@mui/material/Button";

export default function button({ color, name, onClick }) {
  return (
    <Button
      style={{
        backgroundColor: color,
        height: 55,
      }}
      variant="contained"
      disableElevation
      onClick={onClick}
    >
      {name}
    </Button>
  );
}
