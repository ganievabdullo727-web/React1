import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Glavnaya from "./pages/Glavnaya";
import Onas from "./pages/Onas";
import Novosti from "./pages/Novosti";
const App = () => {  
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
   index:true,
    element: <Glavnaya/>
  },
  {
    path:'/onas',
       element:<Onas/>
  },
  {
    path:'/novosti',
    element:<Novosti/>
  }
    ]
  }
]);
  return (
  <RouterProvider router={router} />
  )
}

export default App