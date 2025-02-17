import React from "react";

const KEYS = [];
function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
        gap: ".5rem",
      }}
    ></div>
  );
}

export default Keyboard;
