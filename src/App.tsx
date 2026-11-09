import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "./pages/HomeJotai";
import About from "./pages/About";
const App = () => {  
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
   index:true,
    element: <Home/>
  },
  {
    path:'/about',
       element:<About/>
  }
    ]
  }
]);
  return (
  <RouterProvider router={router} />
  )
}

export default App