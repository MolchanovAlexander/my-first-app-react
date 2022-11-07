import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  //console.log(props);
  return (
    <div>
      <ProfileInfo 
      autorisedId = {props.autorisedUserID} 
      saveProfile = {props.saveProfile} 
      savePhoto = {props.savePhoto} 
      isOwner={props.isOwner} 
      profile={props.profile} 
      status={props.status} 
      updateStatus = {props.updateStatus}/>
      <MyPostsContainer  />
    </div>
  );
};
export default Profile
