import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="bg-gray-500 text-white py-3 px-6 flex justify-center items-center">
      <div>
        <Link to="/" className="hover:text-gray-200">
          Dog Breed Finder
        </Link>
      </div>
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
