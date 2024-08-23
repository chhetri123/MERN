import { useEffect, useContext } from "react";
import { CountryParam } from "../context/appcontext";
import axios from "axios";

export default function List() {
  const { country, addMultipleCountry } = useContext(CountryParam);

  useEffect(() => {
    const fetchCountry = async () => {
      const result = await axios({
        url: "http://localhost:9090/api/country",
        method: "get",
      });
      addMultipleCountry(result.data);
    };

    fetchCountry();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "1rem",
      }}
    >
      {country.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.capitalCity}</p>
          <p>{item.Population}</p>
          <p>{item.countryCode}</p>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}
