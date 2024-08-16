import { useContext } from "react";
import { ListParams } from "../context/list.context";

const Lists = () => {
  const { list, country } = useContext(ListParams);

  return (
    <div>
      <h2>Im inside List component</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {country.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
