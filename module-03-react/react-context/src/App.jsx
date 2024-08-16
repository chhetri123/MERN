import Lists from "./component/lists";
import { useContext } from "react";
import { ListParams } from "./context/list.context";

function App() {
  const { list, addList, addCountry } = useContext(ListParams);

  return (
    <div>
      <h2>Im inside App Component</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          addList("new user");
        }}
      >
        Add new user
      </button>
      <button
        onClick={() => {
          addCountry("new country");
        }}
      >
        Add new country
      </button>
      <Lists />
    </div>
  );
}

export default App;
