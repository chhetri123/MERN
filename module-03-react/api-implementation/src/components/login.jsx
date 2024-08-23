import axios from "axios";
import { useState } from "react";
export default function Login() {
  const [err, setError] = useState("");
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await axios({
        url: "http://localhost:9090/api/user/log",
        method: "post",
        data: info,
      });
      localStorage.setItem("accessToken", result.data.accessToken);
      setInfo({ email: "", password: "" });
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.msg || "Error from server");
    }
  };

  const handleInputChange = (e) => {
    setInfo((prev) => {
      return {
        ...prev,
        ...{ [e.target.name]: e.target.value },
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        name="email"
        value={info.email}
        type="text"
        placeholder="email"
      />
      <input
        onChange={handleInputChange}
        name="password"
        type="password"
        value={info.password}
        placeholder="password"
      />
      <button>Login</button>
      {err && <p>{err}</p>}
    </form>
  );
}
