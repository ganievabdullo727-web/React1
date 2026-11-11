import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "./pages/Home";
import { deleteName } from '@/store/redux'
const App = () => {  
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
   index:true,
    element: <Home/>
  }
    ]
  }
]);
  return (
  <RouterProvider router={router} />
  )
}

export default App