import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/breeds" className="nav-link">
        Breeds
      </NavLink>
      <NavLink to="/addbreed" className="nav-link">
        AddBreed
      </NavLink>
    </nav>
  );
}

export default NavBar;
