import Preloader from "components/preloader/Preloader";
import React from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../../assets/images/1png.png"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  console.log(props);
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div className={ s.main }>

     {/* <img src="https://onpape.com/data/onpape.com-75122001.jpg" alt="img" /> */}

      <div className={ s.description }>
        <img src={props.profile.photos.large != null ? props.profile.photos.large :userPhoto }alt="user photo"/>
        
        <br></br> Name: {props.profile.fullName} <br></br> id:{props.profile.userId}
        <br></br> {props.profile.lookingForAJob ? <span>looking for a job</span>: null}
        <br></br> contacts FB:{props.profile.contacts.facebook}
        <br></br> contacts IG:{props.profile.contacts.instagram}
        <ProfileStatus status={'hello dniwe'} />
      </div>
    </div>
  )
};
export default ProfileInfo;
