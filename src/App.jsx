import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layout from "./Layout/Layout";
import Authflow from "./Pages/Authflow";
import NotFound from "./Pages/NotFound";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Products"));

const protectedPage = (Component) => (
  <Authflow>
    <Suspense
      fallback={
        <div className="pt-[100px] text-center">
          <p>Loading your page please be patient....</p>
        </div>
      }
    >
      <Component />
    </Suspense>
  </Authflow>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: protectedPage(Home) },
      { path: "shop", element: protectedPage(Home) },
      { path: "shop/:id", element: protectedPage(About) },
      { path: "cart", element: protectedPage(Products) },
      { path: "check", element: protectedPage(Check) },
      {
        path: "login",
        element: (
          <Authflow>
            <Login />
          </Authflow>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;