import { NavLink } from "react-router-dom";

function Navbars() {
  return (
    <nav style={{ padding: "10px" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: "10px",
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          marginRight: "10px",
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/user/101"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        User
      </NavLink>
    </nav>
  );
}

export default Navbars;
