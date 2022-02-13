import Preloader from "components/preloader/Preloader";
import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  console.log(props);
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div className={ s.main }>

      <img src="https://onpape.com/data/onpape.com-75122001.jpg" alt="img" />

      <div className={ s.description }>
        <img src={props.profile.photos.large}/>
        picture
      </div>
    </div>
  )
};
export default ProfileInfo;
