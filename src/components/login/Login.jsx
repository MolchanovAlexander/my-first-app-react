import React from "react";
import LoginForm from "./LoginForm";

const Login = (props) => {
  let onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>LOGIN </h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
