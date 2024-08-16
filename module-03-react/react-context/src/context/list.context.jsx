import { any } from "prop-types";
import { createContext, useState } from "react"; //context =>

//context create
export const ListParams = createContext({
  list: [],
  country: [],
  addList: () => {},
  addCountry: () => {},
});

//context provider
export const ListProvider = ({ children }) => {
  const [usersList, setUsers] = useState([
    "nikhil",
    "aaditya",
    "diksha",
    "suzit",
  ]);
  const [country, setCountry] = useState([
    "nepal",
    "china",
    "usa",
    "australia",
  ]);

  const addNewList = (user) => {
    setUsers((prev) => {
      return [user, ...prev];
    });
  };
  const addNewCountry = (country) => {
    setCountry((prev) => {
      return [country, ...prev];
    });
  };
  return (
    <ListParams.Provider
      value={{
        list: usersList,
        addList: addNewList,
        country: country,
        addCountry: addNewCountry,
      }}
    >
      {children}
    </ListParams.Provider>
  );
};

ListProvider.propTypes = {
  children: any,
};
