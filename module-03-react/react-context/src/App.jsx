import { useContext } from "react";
import { listParams } from "./context/list.context";
import ListItem from "./component/list";

function App() {
  const { list, clearAll } = useContext(listParams);
  return (
    <div>
      <h2>This is app </h2>
      {JSON.stringify(list)}
      <button onClick={() => clearAll()}>Clear All</button>

      <ListItem />
    </div>
  );
}

export default App;
