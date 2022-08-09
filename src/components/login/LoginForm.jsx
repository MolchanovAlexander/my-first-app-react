import { Input } from "components/FormsControls/FormControl";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "utils/validators/validators";
import style from "./Login.module.css"
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div>
        <Field 
        placeholder={"email"} 
        name={"email"}
        validate ={ [ required] }
        component={Input} />
      </div>
      <div>
        <Field 
        placeholder={"Password"} 
        name={"password"} 
        type={"password"}
        component={Input} 
        validate ={ [ required] }/>
      </div>
      <div>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />{" "}
        remember me
      </div>
     { props.error ? <div className={style.formSummaryError}>
        {props.error}
      </div> : ''}
      <div>
        <button type={"checkbox"}> Login </button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
