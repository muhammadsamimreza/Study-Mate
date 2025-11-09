import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import MyProfile from "../pages/MyProfile/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import FindPartner from "../components/FindPartner/FindPartner";
import PartnerProfile from "../pages/PartnerProfile/PartnerProfile";
import MyConnection from "../pages/MyConnection/MyConnection";

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
          path: "/find-partner",
          element: <FindPartner></FindPartner>
        },
        {
          path: "/create-partner",
          element: <PartnerProfile></PartnerProfile>
        },
        {
          path:"/my-connection",
          element: <MyConnection></MyConnection>
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
          path: "/forgotpassword", 
          element: <ForgotPassword></ForgotPassword>
        },
        {
          path: "/my-profile", 
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
    ]
  },
]);
export default router;