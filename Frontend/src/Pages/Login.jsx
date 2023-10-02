import React from "react";
import LoginForm from "../comopnents/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <LoginForm />
      <Link to="/register">Signup</Link>
    </>
  );
};

export default Login;
