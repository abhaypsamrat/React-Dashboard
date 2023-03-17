import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" ClassName="active" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/charts" ClassName="active">
            Charts
          </NavLink>
        </li>
        <li>
          <NavLink to="/table" ClassName="active">
            Table
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" ClassName="active">
            List
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" ClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
