import { useState } from "react";

function CheckboxStatus() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ margin: "20px" }}>
        <h2>3.CheckBox:</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        Accept Terms
      </label>

      <p>
        Status: {isChecked ? "Checked" : "Not Checked"}
      </p>
    </div>
  );
}

export default CheckboxStatus;
