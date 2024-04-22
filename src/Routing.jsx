import { createBrowserRouter } from "react-router-dom";
import { Root } from "../src/Layout/Root";
import { Home } from "./Pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
