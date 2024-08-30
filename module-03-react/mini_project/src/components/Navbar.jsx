import { Link } from "react-router-dom";
import useSocket from "../hooks/useSocket";
import NotificationIcon from "./NotificationIcon";
const Navbar = () => {
  const notifications = useSocket();
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
            Task Form
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
        <li>
          <NotificationIcon notifications={notifications} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
