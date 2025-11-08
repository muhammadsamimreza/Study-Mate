import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login", 
          element: <Login></Login>
        },
    ]
  },
]);
export default router;