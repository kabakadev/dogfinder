import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/search" className="nav-link">
        Search Breeds
      </NavLink>
      <NavLink to="/addbreed" className="nav-link">
        AddBreed
      </NavLink>
    </nav>
  );
}

export default NavBar;
