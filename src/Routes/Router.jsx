import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import MyProfile from "../pages/MyProfile/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";

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
        {
          path: "/register", 
          element: <Register></Register>
        },
        {
          path: "/my-profile", 
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
    ]
  },
]);
export default router;