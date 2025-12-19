import { useState } from "react";

function HelloName() {
  const [name, setName] = useState("");

  return (
    <div style={{ margin: "20px" }}>
        <h2>1.Hello+name:</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <h2>Hello, {name}</h2>}
    </div>
  );
}

export default HelloName;
