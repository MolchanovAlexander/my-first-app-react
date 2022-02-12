import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/1png.png";

let Users = (props) => {
  
   console.log(props.totalUsersCount, props.fromCount,props.toCount);
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = props.fromCount; i <= pagesCount && i <= props.toCount; i++ ) {
      pages.push(i);
    }
  return (
    <div>
      <div className={styles.listPages}>
        <button onClick={() => props.stepCountChange("tothefirst")}> {"<<"} </button>
        <button
          className={styles.button}
          onClick={() => props.stepCountChange("prevpages")}
        >
          {"Previous 20"}
        </button>
        {pages.map((p) => (
          <div
            key={p}
            className={props.currentPage === p ? styles.selectedPage : 0}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </div>
        ))}
        <button
          className={styles.button}
          onClick={() => props.stepCountChange("nextpages")}
        >
          {"Next 20     "}
        </button>
        <button onClick={() => props.stepCountChange("tothelast")}> {">>"} </button>
      </div>
      {props.users.map((u) => (
        <div key={u.id} className = {styles.users}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="user photo"
                className={styles.userPhoto}
              />
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
      ))}
    </div>
  );
};

export default Users;
