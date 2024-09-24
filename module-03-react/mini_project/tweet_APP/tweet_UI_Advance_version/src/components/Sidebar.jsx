import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <div className="p-4">
        <nav className="space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link
            to="/explore"
            className="block text-gray-700 hover:text-gray-900"
          >
            Explore
          </Link>
          <Link to="/feed" className="block text-gray-700 hover:text-gray-900">
            Feed
          </Link>
          <Link to="/terms" className="block text-gray-700 hover:text-gray-900">
            Terms
          </Link>
          <Link
            to="/support"
            className="block text-gray-700 hover:text-gray-900"
          >
            Support
          </Link>
          <Link
            to="/settings"
            className="block text-gray-700 hover:text-gray-900"
          >
            Settings
          </Link>
        </nav>
      </div>
      <div className="border-t p-4 text-center">
        <Link
          to="/profile"
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
