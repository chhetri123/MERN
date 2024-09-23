import Home from "./page/Home";
import About from "./page/About";
import TimerPage from "./page/Timer";
import User from "./page/User";
import UserDetails from "./page/UserDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
