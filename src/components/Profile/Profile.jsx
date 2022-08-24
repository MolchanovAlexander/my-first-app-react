import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  console.log('render');
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer  />
    </div>
  );
};
export const ProfileMemo = React.memo(Profile);
