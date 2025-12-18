import { useState } from "react";

function ColorButton() {
  const [bgColor, setBgColor] = useState("blue");

  return (
    <div >
        <h2>5.ColorButton:</h2>
      <button
        onClick={() =>
          setBgColor(bgColor === "blue" ? "green" : "blue")
        }
        style={{
          backgroundColor: bgColor,
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default ColorButton;
