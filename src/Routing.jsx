import { createBrowserRouter } from "react-router-dom";
import { Root } from "../src/Layout/Root";
import { Home } from "./Pages/Home";
import { Add } from "./Pages/Add";
import { Login } from "./Pages/Login";
import { ProductDetials } from "./Components/ProductDetials";
import { Edit } from "./Components/Edit";

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
        path: "/view/product/:id",
        element: <ProductDetials />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
    ],
  },
]);
