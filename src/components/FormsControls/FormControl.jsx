import React from "react";
import styles from "./FormControl.module.css"
import { reduxForm, Field } from "redux-form";

export const Textarea = ({ input, meta:{touched, error}, ...props }) => {
  const hasError = error && touched
  return (
    <div className={hasError ? styles.error : ""}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span> {error} </span>}
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched
  return (
    <div className={hasError ? styles.error : ""}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span> {meta.error} </span>}
    </div>
  )
}
export const CreateField = ( placeholder, name, validate =[], component, props={}, text = '') =>
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validate}
      component={component} 
      {...props}/> {text}
  </div>



