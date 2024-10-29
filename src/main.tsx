import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Profile from "./views/profile/profile";
import Technologies from "./views/technologies/technologies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<Profile />} />,
  },
  {
    path: "/technologies",
    element: <App children={<Technologies />} />,
  },
  {
    path: "/works",
    element: <App children={<Profile />} />,
  },
  {
    path: "/portfolio",
    element: <App children={<Profile />} />,
  },
  {
    path: "/academy",
    element: <App children={<Profile />} />,
  },
  {
    path: "/courses",
    element: <App children={<Profile />} />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
