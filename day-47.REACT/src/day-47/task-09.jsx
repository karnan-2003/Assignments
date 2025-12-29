import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <NavLink to="profile">Profile</NavLink> |{" "}
        <NavLink to="settings">Settings</NavLink> |{" "}
        <NavLink to="reports">Reports</NavLink>
      </nav>

      <hr />

      {}
      <Outlet />
    </div>
  );
}

export default Dashboard;
