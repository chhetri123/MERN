import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex gap-x-4 bg-[#333] justify-center py-4">
      <li className="text-white">
        <Link to={"/"}>Homepage</Link>
      </li>
      <li className="text-white">
        <Link to={"/about/849302842308"}>AboutPage</Link>
      </li>
    </ul>
  );
};

export default Navbar;
