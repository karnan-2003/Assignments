import React, { useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4">
      <h1>React JS Example</h1>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Me
      </button>

      <p>Button clicked {count} times</p>

      <Greeting name="Karnan" />
    </div>
  );
}

export default App;
