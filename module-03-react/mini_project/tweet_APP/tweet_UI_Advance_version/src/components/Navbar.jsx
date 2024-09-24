import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-light">
            <i className="fas fa-brain mr-1"></i>Ideas
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-gray-900">
              Register
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
