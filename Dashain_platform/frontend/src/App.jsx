import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Event from "./pages/event";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
