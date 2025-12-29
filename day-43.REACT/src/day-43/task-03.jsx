import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div>
        <h2>3.ToggleButton:</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {!isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;
