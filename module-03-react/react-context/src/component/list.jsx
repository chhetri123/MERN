import { useContext } from "react";
import { listParams } from "../context/list.context";

const ListItem = () => {
  const { list, addItem } = useContext(listParams);
  return (
    <div>
      <h2>This is list</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.number}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          addItem("someone", 200);
        }}
      >
        Add New Item
      </button>
    </div>
  );
};

export default ListItem;
