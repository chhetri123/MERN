import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CountryProvider } from "./context/appcontext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </StrictMode>
);
