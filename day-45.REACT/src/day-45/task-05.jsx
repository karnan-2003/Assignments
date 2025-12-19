import { useState } from "react";

function PasswordMatch() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div style={{ margin: "20px", width: "300px" }}>
      <h3>5.Create Password:</h3>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      {/* Live Validation */}
      {confirmPassword && (
        <p
          style={{
            color: isMatch ? "green" : "red",
            fontWeight: "bold"
          }}
        >
          {isMatch ? "Passwords match ✅" : "Passwords do not match ❌"}
        </p>
      )}
    </div>
  );
}

export default PasswordMatch;
