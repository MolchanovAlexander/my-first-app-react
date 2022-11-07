import Preloader from "components/preloader/Preloader";
import React, { useState, useCallback } from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../../assets/images/1png.png";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)

  //console.log(editMode);

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    );

  };
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.main}>
      {/* <img src="https://onpape.com/data/onpape.com-75122001.jpg" alt="img" /> */}

      <div className={s.description}>
        <div>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto
            }
            alt="user photo"
          />
        </div>
        {props.isOwner && (props.autorisedId == props.profile.userId) && <input value={undefined} type={"file"} onChange={onMainPhotoSelected} />}


        <ProfileStatusWithHooks
          autorisedId={props.autorisedId}
          profile={props.profile}
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
        />


        {
          editMode
            ? <ProfileDataForm
              onSubmit={onSubmit}
              initialValues={props.profile}
              profile={props.profile} />
            : <ProfileData
              profile={props.profile}
              isOwner={props.isOwner}
              goToEditMode={() => { setEditMode(true) }} />}



      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

  return (
    <div>
      <div>
        <b>FullName:</b> {profile.fullName}
      </div>
      <div>
        <b>id:</b>{profile.userId}
      </div>
      {isOwner && <div> <button onClick={goToEditMode}>edit</button> </div>}
      <div>
        <b>looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>Skills:</b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <br></br>
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>)
}
const Contact = ({ contactTitle, contactValue }) => {
  return <div>  <b>    {contactTitle}  </b>: {contactValue}</div>
}
export default ProfileInfo