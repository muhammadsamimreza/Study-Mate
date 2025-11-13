import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';
import { AuthContext } from './AuthContext';


const PrivateRoute = ({children}) => {

    const {user,loading,} =useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
   if (user && user.email){
       return children
   }
  return <Navigate to="/login" state={location.pathname}></Navigate>
   
};

export default PrivateRoute;