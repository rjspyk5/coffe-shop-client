import { createBrowserRouter } from "react-router-dom";
import { Root } from "../src/Layout/Root";
import { Home } from "./Pages/Home";
import { Add } from "./Pages/Add";
import { Login } from "./Pages/Login";
import { ProductDetials } from "./Components/ProductDetials";

import { UpdateDetails } from "./Components/UpdateDetails";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";
import { Users2 } from "./Components/Users2";
import { useQuery } from "@tanstack/react-query";

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
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch(`http://localhost:5000/users`),
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.id}`),
      },
      {
        path: "/users2",
        element: <Users2 />,
      },
    ],
  },
]);
