import { useState } from "react";

function CountrySelect() {
  const [country, setCountry] = useState("");

  return (
    <div style={{ margin: "20px" }}>
        <h2>4.CountrySelect:</h2>
      <label>
        Choose Country:{" "}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </label>

      {country && (
        <p>Selected Country: {country}</p>
      )}
    </div>
  );
}

export default CountrySelect;
