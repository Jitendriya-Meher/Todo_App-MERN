import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

  const {isAdmin} = useSelector(state=>state.auth);

  if(isAdmin){
    return children;
  }else{
    return <Navigate to="/dashboard" />;
  }
}

export default AdminRoute
