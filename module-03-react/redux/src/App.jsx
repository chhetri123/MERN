import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";

// counter application ---> count --> state -->
// ----> increment and decrement --> reducers
// action --> {type,payload}-->
/*
{
type:"INCREASE",
payload: {
count}
}

{
type:"DECREASE",
payload: {
count}
}

*/

// store ==> we create a store and save states

// State

///

//
function App() {
  // const [count, setCount] = useState(0);

  return <Counter />;
}

export default App;
