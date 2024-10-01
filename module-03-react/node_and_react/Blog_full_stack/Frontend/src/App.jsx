import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/navigation/header";

export default function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return;
    }
    setToken(token);
  }, []);
  return (
    <BrowserRouter>
      <Header tokenCheck={token} />
      <Routes>
        <Route path="/" element={token ? <Home token={token} /> : <SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
