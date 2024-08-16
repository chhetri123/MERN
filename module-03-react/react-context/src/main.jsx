import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ListProvider } from "./context/list.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </StrictMode>
);
