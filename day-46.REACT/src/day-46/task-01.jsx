import { useState, useEffect } from "react";

function RenderLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Rendered!");
  });

  return (
    <div style={{ margin: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default RenderLogger;
