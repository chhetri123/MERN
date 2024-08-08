import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex">
      <li>
        <Link to={"/"}>Homepage</Link>
        <Link to={"/about"}>AboutPage</Link>
      </li>
    </ul>
  );
};

export default Navbar;
