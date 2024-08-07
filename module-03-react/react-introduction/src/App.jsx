import { useState } from "react";
import { Button } from "react-bootstrap";

export default function App() {
  const [list, setList] = useState(["one", "two", "three", "four"]);

  const deleteItem = (id) => {
    setList((prev) => {
      return [...prev.filter((item, index) => index !== id)];
    });
  };
  const handleUpdate = (id, val) => {
    list.splice(id, 1, val);
    setList([...list]);
    // setList((prev) => {
    //   const udpatedList = prev.map((item, index) => {
    //     return index === id ? val : item;
    //   });
    //   return [...udpatedList];
    // });
  };

  const updateItem = (id) => {
    const newVal = window.prompt("Updated value here");
    if (!newVal) return;
    handleUpdate(id, newVal);
  };

  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <Button variant="warning">Hello</Button>
          <button onClick={() => deleteItem(index)}>Delete</button>
          <button onClick={() => updateItem(index)}>Edit</button>
        </li>
      ))}
    </div>
  );
}
