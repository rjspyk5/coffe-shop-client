import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../src/Layout/Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
