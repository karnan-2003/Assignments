import { useState, useEffect } from "react";

function NameLogger() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      console.log("Name changed:", name);
    }
  }, [name]);

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      {name && <p>Hello, {name}!</p>}
    </div>
  );
}

export default NameLogger;
