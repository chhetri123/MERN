import { useState } from "react";

function Practice() {
  const [list, setList] = useState(["cow", "dog", "hen", "bat", "rat", "cat"]);

  const addNikhil = () => {
    setList((prev) => {
      return [...prev, "nikhil"];
    });
  };
  const removeNikhil = () => {
    setList((prev) => {
      return [...prev.slice(0, prev.length - 1)];
    });
  };
  const editNikhil = () => {
    setList((prev) => {
      prev.splice(2, 1, "lan");
      return [...prev];
    });
  };
  return (
    <div>
      <p>{JSON.stringify(list)}</p>
      <button onClick={addNikhil}>Add Nikhil</button>
      <button onClick={removeNikhil}>Remove Nikhil</button>
      <button onClick={editNikhil}>Edit Hen</button>
    </div>
  );
}

export default Practice;
