import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Courses from "./pages/Courses";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Aboutus /> },
      { path: "courses", element: <Courses /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
