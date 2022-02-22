import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} type={"checkbox"} name={"rememberMe"} />{" "}
        remember me
      </div>
      <div>
        <button type={"checkbox"}> Login </button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
