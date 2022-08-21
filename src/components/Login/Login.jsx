import React from 'react';
import AuthLayout from "../AuthLayout/AuthLayout";

const Login = (props) => {
  return (
    <AuthLayout
      action='login'
      error={props.error}
      handleSubmit={props.handleLoginSubmit}
    />
  );
};

export default Login;
