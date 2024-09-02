import { useContext } from "react";
import { ContextParam } from "./context/context";

function App() {
  const { country, addCountry, deleteCountry, countryUpdate } =
    useContext(ContextParam);

  return (
    <div>
      <div>{JSON.stringify(country)}</div>
      <button onClick={() => addCountry("USA")}>Add USA</button>
    </div>
  );
}

export default App;
