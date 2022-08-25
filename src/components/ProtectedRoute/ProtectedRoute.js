import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!localStorage.getItem("jwt")) {
    return <Navigate to={'/'} replace />;
  }
  return props.children;
}

export default ProtectedRoute;
