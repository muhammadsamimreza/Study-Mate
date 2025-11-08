import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
    ]
  },
]);
export default router;