// pages/Login.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-center mb-6">Login</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <Button className="w-full">Login</Button>
            </form>
            <div className="mt-4 text-right">
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800"
              >
                Register here
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
