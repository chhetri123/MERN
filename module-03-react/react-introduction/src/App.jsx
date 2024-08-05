import NameComponent from "./components/Name";
import NameTag from "./components/Nametag";

function App() {
  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      <NameComponent name={"Nikhil"} />
      <NameTag>Anything here</NameTag>
    </div>
  );
}

export default App;
