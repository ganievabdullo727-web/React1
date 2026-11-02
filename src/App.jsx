import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Birjha from "./pages/Birjha";
import Sozdatwork from "./pages/Sozdatwork";
import ProductView from "./pages/ProductView";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Users } from "lucide-react";
import MyAccount from "./pages/MyAccount";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Birjha />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/sozdatwork",
          element: <Sozdatwork />,
        },
        {
          path: "/product/:id",
          element: <ProductView />,
        },
        {
          path: "/myaccount",
          element: <MyAccount />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
