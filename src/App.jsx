import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from '../Layout/Layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductsByid from '../pages/ProductsByid';
import NotFound from '../pages/NotFound';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'products', 
          element: <Products/>
        },
        {
          path: 'productsbyid', 
          element: <ProductsByid/>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App