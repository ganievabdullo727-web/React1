import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Birjha from './pages/Birjha';
import Vorki from './pages/Vorki';
import Konkursi from './pages/Konkursi';
import Sozdatwork from './pages/Sozdatwork';
import Sozdatzakaz from './pages/Sozdatzakaz';
const App = () => {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
   index:true,
    element: <Birjha/>,
  },
  {
    path:'/vorky',
    element:<Vorki/>
  },
  {
    path:'/konkursi',
    element:<Konkursi/>
  },
  {
    path:'/sozdatwork',
    element:<Sozdatwork/>
  },
  {
    path:'/sozdatzakaz',
    element:<Sozdatzakaz/>
  }
    ]
  }
]);
  return (
  <RouterProvider router={router} />
  )
}

export default App