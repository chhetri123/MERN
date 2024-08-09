import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-8 justify-center">
        <li>
          <Link to="/" className="text-white hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/form" className="text-white hover:text-blue-400">
            Form
          </Link>
        </li>
        <li>
          <Link to="/details" className="text-white hover:text-blue-400">
            Task Details
          </Link>
        </li>
        <li>
          <Link to="/movies" className="text-white hover:text-blue-400">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
