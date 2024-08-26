import { createContext, useState } from "react";

//context param
export const CountryParam = createContext({
  country: [],
  addCountry: () => {},
  addMultipleCountry: () => {},
  editCoutnry: () => {},
  deleteCountry: () => {},
});

//provider
export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);

  const addMultipleCountry = (country) => {
    setCountry(country);
  };
  const addCountry = (country) => {
    setCountry((prev) => {
      return [country, ...prev];
    });
  };

  const editCountry = () => {};

  const deleteCountry = () => {};
  return (
    <CountryParam.Provider
      value={{
        country,
        addCountry,
        addMultipleCountry,
        editCountry,
        deleteCountry,
      }}
    >
      {children}
    </CountryParam.Provider>
  );
};
