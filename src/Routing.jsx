import { createBrowserRouter } from "react-router-dom";
import { Root } from "../src/Layout/Root";
import { Home } from "./Pages/Home";
import { Add } from "./Pages/Add";
import { Login } from "./Pages/Login";
import { ProductDetials } from "./Components/ProductDetials";

import { UpdateDetails } from "./Components/UpdateDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/coffe/:id",
        element: <ProductDetials />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffe/${params.id}`),
      },
      {
        path: "/edit/:id",
        element: <UpdateDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffe/${params.id}`),
      },
    ],
  },
]);
