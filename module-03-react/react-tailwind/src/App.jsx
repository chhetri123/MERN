import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import Navbar from "./component/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            Component={() => {
              return <Homepage />;
            }}
          />
          <Route
            path="/movies/details/:id"
            Component={() => {
              return <AboutPage />;
            }}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
