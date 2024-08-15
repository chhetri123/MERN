import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ListContextProvider } from "./context/list.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </StrictMode>
);
