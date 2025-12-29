function CenteredLayout() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{ padding: "20px", background: "blue", color: "white" }}>
        Centered Content
      </div>
    </div>
  );
}

export default CenteredLayout;
