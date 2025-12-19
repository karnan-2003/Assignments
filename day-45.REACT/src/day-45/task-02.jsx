import { useState } from "react";

function UppercaseInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  return (
    <div style={{ margin: "20px" }}>
        <h2>2.UppercaseInput:</h2>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
      />

      <p>Value: {text}</p>
    </div>
  );
}

export default UppercaseInput;
