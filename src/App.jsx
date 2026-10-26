import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import Courses from "./pages/Courses";
import Aboutus from "./pages/Aboutus";
const App = () => {  
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
   index:true,
    element: <Aboutus/>
  },
  {
    path:'/courses',
    element:<Courses/>
  }
    ]
  }
]);
  return (
  <RouterProvider router={router} />
  )
}

export default App