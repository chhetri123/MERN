import { createContext, useState } from "react";

export const ContextParam = createContext({
  country: [],
  addCountry: () => {},
  deleteCountry: () => {},
  countryUpdate: () => {},
});

export const ContextProvider = ({ children }) => {
  //logic here
  const [countries, setCountries] = useState([
    "nepal",
    "china",
    "india",
    "china",
    "abncd",
  ]);

  const addNewCountry = (country) => {
    setCountries((prev) => {
      return [...prev, country];
    });
  };
  const removeCountry = (country) => {
    countries.splice(
      countries.findIndex((country) => country === country),
      1
    );
  };

  const updateCountry = (country) => {
    countries.splice(
      countries.findIndex((country) => country === country),
      0,
      "updated-value"
    );
  };

  return (
    <ContextParam.Provider
      value={{
        country: countries,
        addCountry: addNewCountry,
        deleteCountry: removeCountry,
        countryUpdate: updateCountry,
      }}
    >
      {children}
    </ContextParam.Provider>
  );
};
