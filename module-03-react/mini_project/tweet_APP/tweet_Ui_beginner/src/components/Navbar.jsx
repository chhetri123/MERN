import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow">
      <div className="container mx-auto flex justify-between">
        <Link className="text-white text-lg font-light" to="/">
          <i className="fas fa-brain mr-2"></i>Ideas
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
