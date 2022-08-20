import React from 'react';
import './Register.css';
import AuthLayout from "../AuthLayout/AuthLayout";

const Register = (props) => {
  return (
    <AuthLayout action='register' error={props.error} handleSubmit={props.handleRegisterSubmit}/>
  );
};

export default Register;
