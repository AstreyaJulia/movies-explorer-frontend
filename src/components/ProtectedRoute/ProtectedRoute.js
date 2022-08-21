import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {

  return (
    props.loggedIn ?
      props.children
      :
      <Navigate replace to={localStorage.getItem('token') ? props.location : '/'}/>
  )
}

export default ProtectedRoute;