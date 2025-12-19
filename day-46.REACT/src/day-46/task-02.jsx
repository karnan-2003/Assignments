import { useEffect } from "react";

function ComponentLoaded() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []); 

  return (
    <div style={{ margin: "20px" }}>
      <h2>Check the console!</h2>
    </div>
  );
}

export default ComponentLoaded;
