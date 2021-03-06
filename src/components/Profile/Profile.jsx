import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer  />
    </div>
  );
};
export default Profile;
