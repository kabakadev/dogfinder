import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white py-3 px-6 flex justify-evenly items-center ">
      <NavLink to="/" className="nav-link hover:underline">
        Home
      </NavLink>
      <NavLink to="/breeds" className="nav-link hover:underline">
        Breeds
      </NavLink>
      <NavLink to="/addbreed" className="nav-link hover:underline">
        AddBreed
      </NavLink>
    </nav>
  );
}

export default NavBar;
