import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/navigation/header";
import axios from "axios";
export default function App() {
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return;
    }

    const checkToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8070/api/users/isLoggedIn",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data.user);
      } catch (err) {
        if (err.response.data.status === "fail") {
          localStorage.removeItem("accessToken");
          setToken(null);
          setMsg("Token Malformed ! Your are redirected to login page ....");
          setTimeout(() => {
            window.location.href = "/login";
            setMsg("");
          }, 1000);
        }
      }
    };
    checkToken();
    setToken(token);
  }, []);
  return (
    <BrowserRouter>
      <Header tokenCheck={token} user={user} />
      {msg && <p>{msg}</p>}
      <Routes>
        <Route
          path="/"
          element={token ? <Home user={user} token={token} /> : <SignUp />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
