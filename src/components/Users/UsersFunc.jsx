import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/1png.png";
import { NavLink } from "react-router-dom";


let Users = (props) => {
  
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = props.fromCount; i <= pagesCount && i <= props.toCount; i++ ) {
      pages.push(i);
    }
  return (
    <div>
      <div className={styles.listPages}>
        <button onClick={() => props.stepCountChange(0)}> {"<<"} </button>
        <button
          className={styles.button}
          onClick={() => props.stepCountChange(1)}
        >
          {"Previous 20"}
        </button>
        {pages.map((p) => (
          <div
            key={p}
            className={props.currentPage === p ? styles.selectedPage : 0}
            onClick={() => props.onPageChanged(p, props.fromCount,props.toCount)}
          >
            {p}
          </div>
        ))}
        <button
          className={styles.button}
          onClick={() => props.stepCountChange(2)}
        >
          {"Next 20     "}
        </button>
        <button onClick={() => props.stepCountChange(3)}> {">>"} </button>
      </div>
      <div className={styles.body_users}>
      {props.users.map((u) => (
        <div key={u.id} className = {styles.users}>
          <span>
            <div>
              <NavLink to={'/profile/'+ u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="user photo"
                className={styles.userPhoto}
              />
               </NavLink>
            </div> 
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UNFOLLOW{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW{" "}
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.id}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
        
      ))}</div>
    </div>
  );
};

export default Users;
