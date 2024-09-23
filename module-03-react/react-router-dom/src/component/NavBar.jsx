import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link
            to="/"
            className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
          >
            NavBar
          </Link>
          <div className="lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link to="/" className="flex items-center">
                  Home
                </Link>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link to="/about" className="flex items-center">
                  About
                </Link>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link to="/timer" className="flex items-center">
                  Timer
                </Link>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link to="/user" className="flex items-center">
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
