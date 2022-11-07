import { CreateField, Input, Textarea } from "components/FormsControls/FormControl"
import React from "react"
import { reduxForm } from "redux-form"
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div> <button >save</button> </div>
            {error
                ? <div className={s.formSummaryError}>
                    {error}
                </div> : ''}
            <div>
                <b>FullName:</b> {CreateField("Full name", "fullName", [], Input)}
            </div>

            <div>
                <b>looking for a job:</b>
                {CreateField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>Skills:</b>
                {CreateField("Skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b>
                {CreateField("About me", "aboutMe", [], Textarea)}
            </div>
            <br></br>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (<div key={key} className={s.contact}>
                        <b>{key}:{CreateField(key, "contacts." + key, [], Input)}</b>
                    </div>)
                })}
            </div>
            
        </form>)
}
const ProfileDataFormReduxForm = reduxForm({ form: "edit_profile" })(ProfileDataForm);
export default ProfileDataFormReduxForm