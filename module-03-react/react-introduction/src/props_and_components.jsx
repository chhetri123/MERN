// import NameComponent from "./components/Name";
// import NameTag from "./components/Nametag";
// import DogImage from "./assets/dog.png";
// import { useState, useEffect } from "react";
import Practice from "./components/practive";
// useState,
// useEffect

// useCallback => ( function memoize )
// useMemo => value ( memoize )

function App() {
  // const [digits, setDigits] = useState(1);
  // const [wholenumbers, setWholeNumber] = useState(0);

  // const [list, setList] = useState(["one", "two", "three", "four"]);
  // const [name, setName] = useState("nikhil");

  // const dog = "germanshepherd";
  // useEffect(() => {
  // setList((prev) => {
  // return [...prev, "five"];
  // });
  // }, [digits]);

  // const handleClick = () => {
  // setDigits(Math.ceil(Math.random() * 10000));
  // };

  // const handleWholeNum = () => {
  // setWholeNumber(Math.ceil(Math.random() * 10000));
  // };
  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      <Practice />

      {/* {JSON.stringify(list)} */}
      {/* conditional rendering */}
      {/* {dog === "germanshepherd" ? (
        <img src={DogImage} alt={dog} />
      ) : (
        <h2>{dog} not found</h2>
      )} */}
      {/* <button onClick={handleClick}>Digit</button> */}
      {/* <button onClick={handleWholeNum}>Whole Number</button> */}
      {/* <h2> */}
      {/* {digits} {wholenumbers} */}
      {/* </h2> */}
      {/* <p></p> */}
      {/* <NameComponent name={"Nikhil"} />
      <NameTag>Anything here</NameTag> */}
    </div>
  );
}

export default App;
