function Buttons({ color, size, text }) {
  const styles = {
    backgroundColor: color,
    padding:
      size === "small"
        ? "6px 12px"
        : size === "large"
        ? "14px 28px"
        : "10px 20px",
    fontSize:
      size === "small"
        ? "12px"
        : size === "large"
        ? "18px"
        : "14px",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    margin: "5px"
  };

  return <button >{text}</button>;
}

export default Buttons;
