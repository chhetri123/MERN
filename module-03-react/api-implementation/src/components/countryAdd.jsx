import axios from "axios";
import { CountryParam } from "../context/appcontext";
import { useState, useContext } from "react";

export default function CountryAdd() {
  const { addCountry } = useContext(CountryParam);
  const [err, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    countryCode: "",
    capitalCity: "",
    Population: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const result = await axios({
        url: "http://localhost:9090/api/country/add",
        method: "post",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      addCountry(result.data);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.msg || "Error from server");
    }
  };

  const handleInputChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="countryCode"
        placeholder="country code"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="capitalCity"
        placeholder="capital city"
      />
      <input
        onChange={handleInputChange}
        type="number"
        name="Population"
        placeholder="Population"
      />
      <button>Add</button>
      {err && <p>{err}</p>}
    </form>
  );
}
