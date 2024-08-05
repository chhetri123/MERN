// import { useState } from "react";
import NikhilComponent from "./components/Nikhil";
import NikhilTag from "./components/NikhilTag";

function App() {
  // const [count, setCount] = useState(100);

  // const handleClick = () => {
  //   setCount((prev) => {
  //     return prev + 10;
  //   });
  // };

  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      {/* <div>Result: {count} </div>
      <button
        style={{ fontSize: "2rem", padding: "1rem" }}
        onClick={handleClick}
      >
        {count}
      </button> */}
      <NikhilComponent name={"Diksha"} />
      <NikhilComponent name={"Suzit"} />
      <NikhilComponent name={"Aaditya"} />
      <NikhilComponent name={"fdjaklfjklds"} />
      <NikhilTag>hello world</NikhilTag>
    </div>
  );
}

export default App;
