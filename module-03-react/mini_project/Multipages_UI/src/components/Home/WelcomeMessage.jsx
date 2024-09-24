import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-lg font-light">
          Manage your tasks efficiently and stay organized.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
