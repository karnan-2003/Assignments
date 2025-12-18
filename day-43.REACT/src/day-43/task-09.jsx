import { useState } from "react";

function Dropdown() {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ margin: "20px" }}>
        <h2>9.DropDown:</h2>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Select a course</option>
        <option value="react">React</option>
        <option value="node">Node.js</option>
        <option value="sql">SQL</option>
      </select>

      {selected && (
        <p>You selected: {selected}</p>
      )}
    </div>
  );
}

export default Dropdown;
