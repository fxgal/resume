import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Profile from "./views/profile/profile";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App>
          <Profile />
        </App>
      </BrowserRouter>
    </StrictMode>
  );
}
