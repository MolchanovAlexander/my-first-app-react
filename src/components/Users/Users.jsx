import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/1png.png";
import * as axios from "axios";
const API_KEY = "7c3adbdc-44e2-4a5d-ba99-d4184393f8f1";
let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="xfgd"
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    console.log(u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "7c3adbdc-44e2-4a5d-ba99-d4184393f8f1",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        console.log(response.data);
                      });
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "7c3adbdc-44e2-4a5d-ba99-d4184393f8f1",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                        console.log(response.data);
                      });
                  }}
                >
                  FOLLOW
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
              <div>{"u.location?.country"}</div>
              <div>{"u.location?.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
