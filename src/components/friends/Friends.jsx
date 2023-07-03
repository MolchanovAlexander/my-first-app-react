import React from "react";
import s from "./Friend.module.scss";
import { MappingComponentsArray } from "utils/mappingComponentHelper";
import userPhoto from "../../assets/images/1png.png";


const Friends = (props) => {
  console.log(props);
  let amount = props.friendsData.slice(0, 6)
  return (

    <div>{props.followingRun.length}
      <div>
        <br></br>
        <div className={s.wrapFriends}>

          {MappingComponentsArray(amount, s.fullView, s.friend,
            userPhoto)}

        </div>
      </div>
    </div>

  )
};
export default Friends;

