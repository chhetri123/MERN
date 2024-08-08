import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import Navbar from "./component/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
