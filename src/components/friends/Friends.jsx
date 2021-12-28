import React from "react";
import Friend from "./friend/Friend";
import s from "./Friends.module.css";




const Friends = (props) => {

  let propFriends = props.friends.slice(0, 6)
  let friendsElements = propFriends.map(d => <Friend name={d.name} src={d.src} />)
  

  return (
    <div className={s.friendlist}>
     { friendsElements}
    </div>
  );
};
export default Friends;