import axios from "axios";
import { useState } from "react";
export default function LoginPage() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const req = await axios({
        method: "post",
        url: "http://localhost:4040/login",
        data: userDetails,
      });
      const res = await req.data;
      localStorage.setItem("user_auth_token", res.token);
      alert("logged in successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <input name="email" onChange={handleChange} type="email" />
      <input name="password" onChange={handleChange} type="password" />
      <button>Login</button>
    </form>
  );
}
