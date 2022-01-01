import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      dataposts={props.profile.postsData} 
      newPostText={props.profile.newPostText} 
      dispatch={props.dispatch} />
    </div>
  );
};
export default Profile;
