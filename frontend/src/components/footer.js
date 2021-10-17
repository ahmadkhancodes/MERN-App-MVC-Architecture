import React from "react";

function footer() {
  return (
    <div>
      <p
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Ahmad Khan
      </p>
    </div>
  );
}

export default footer;
