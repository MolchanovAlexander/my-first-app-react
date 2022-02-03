import React from "react";
import Friend from "./friend/Friend";
import s from "./Friends.module.css";




const Friends = (props) => {

  let propFriends = props.friendsData.slice(0, 6)
  let friendsElements = propFriends.map(d => <Friend key={d.id} name={d.name} src={d.src} status={d.status} />)
  

  return (
    <div className={s.friendlist}>
     { friendsElements}
    </div>
  );
};
export default Friends;
