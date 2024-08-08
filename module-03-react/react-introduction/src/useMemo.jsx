import { useState, useMemo } from "react";
import Layout from "./layout/layout";

function App() {
  const [counter, setCounter] = useState(0);

  const c = useMemo(() => {
    return calculate(counter);
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <Layout>
      <p>{c}</p>
      {/* <button onClick={greet}>Say HI</button> */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </Layout>
  );

  function calculate(num) {
    // for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
}

export default App;
