import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div className={ s.main }>

      <img src="https://onpape.com/data/onpape.com-75122001.jpg" alt="img" />

      <div className={ s.description }>
        ava+descriptionsComp
      </div>
    </div>
  )
};
export default ProfileInfo;
