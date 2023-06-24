import { CreateField, Input } from "components/FormsControls/FormControl";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "utils/validators/validators";
import style from "./Login.module.css"
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} action="">
      {CreateField("email", "email", [required], Input)}
      {CreateField("Password", "password", [required], Input, { type: "password" })}
      {CreateField(null, "rememberMe", undefined, Input, { type: "checkbox" }, 'remember me')}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && CreateField("symbols from image", "captcha", [required], Input, {})}
      
      {error ? <div className={style.formSummaryError}>
        {error}
      </div> : ''}
      <div>
        <button type={"checkbox"}> Login </button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
