import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "careerDetails",
          element: <CareerDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
   {
      path: "*",
      element: <Notfound />,
    }, 
  ]);
  return <RouterProvider router={router} />;
};

export default App;