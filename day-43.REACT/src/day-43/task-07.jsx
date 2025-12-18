import { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "10vh",
    padding: "20px"
  };

  return (
    <div style={styles}>
        <h2>7.Theme Switcher:</h2>
      <h2>{theme === "light" ? "Light Theme" : "Dark Theme"}</h2>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        style={{
          padding: "10px 20px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
