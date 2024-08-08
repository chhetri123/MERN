import { useState, useEffect, useCallback, useMemo } from "react";
import Layout from "./layout/layout";

function App() {
  const [num, setNum] = useState(0);
  const l = 20;

  const increment = () => {
    setNum((prev) => prev + 1);
  };

  // memoize
  const cpuIntensiveFunc = useCallback(() => {
    if (num === 20) console.log("here");
    return 1;
  }, [num]);

  // // js =>

  // value => Boolean,string,number,float,...
  // referecence

  useEffect(() => {
    console.log("something");
  }, [cpuIntensiveFunc]);

  return (
    <Layout>
      <h2>{num}</h2>
      <button onClick={increment}>Increment</button>
    </Layout>
  );
}

export default App;
