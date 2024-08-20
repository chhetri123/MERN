import { useFetch } from "./components/useFetch";

function App() {
  const [data, isLoading] = useFetch(
    "http://universities.hipolabs.com/search?country=nepal"
  );

  if (isLoading) return <div>{isLoading}</div>;

  return (
    <div>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default App;
