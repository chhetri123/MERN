import proptype from "prop-types";
import { createContext } from "react";
import { useState } from "react";

//context create
export const listParams = createContext({
  list: [],
  addItem: () => {},
  clearAll: () => {},
});

//provider create
export const ListContextProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      name: "Nikhil",
      number: 20,
    },
    {
      name: "Diksha",
      number: 30,
    },
    {
      name: "suzit",
      number: 50,
    },
  ]);

  const addItem = (name, number) => {
    setList((prev) => {
      return [{ name, number }, ...prev];
    });
  };
  const clearAll = () => {
    setList([]);
  };
  return (
    <listParams.Provider
      value={{
        list: list,
        addItem: addItem,
        clearAll: clearAll,
      }}
    >
      {children}
    </listParams.Provider>
  );
};

ListContextProvider.propTypes = {
  children: proptype.any,
};
