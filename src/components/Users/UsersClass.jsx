import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/1png.png";

const step = 20;

class Users extends React.Component {
  toCount = step;
  fromCount = 1;

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  };
  stepCountChange = (way) => {
    if (way === 1) {
      this.fromCount = this.toCount + 1;
      this.toCount = this.toCount + step;
    } else if (way === 10) {
      this.fromCount = 1+step*(Math.floor((this.props.totalUsersCount / this.props.pageSize)/step ));
      this.toCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    } else if (way === 0 && this.fromCount > 1 && this.fromCount > step) {
      this.fromCount = this.fromCount - step;
      this.toCount = this.toCount - step;
    } else if (way === 0 && this.fromCount <= step) {
      this.fromCount = 1;
      this.toCount = step;
    } else if (way === -1) {
      this.fromCount = 1;
      this.toCount = step;
    }

    this.props.setCurrentPage(this.fromCount);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.fromCount}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];

    for (let i = this.fromCount; i <= pagesCount && i <= this.toCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div className={styles.listPages}>
          <button onClick={() => this.stepCountChange(-1)}> {"<<"} </button>
          <button onClick={() => this.stepCountChange(0)}>Previous 20</button>
          {pages.map((p) => (
            <div
              key={p}
              className={this.props.currentPage === p ? styles.selectedPage : 0}
              onClick={() => this.onPageChanged(p)}
            >
              {p}
            </div>
          ))}
          <button onClick={() => this.stepCountChange(1)}>Next 20</button>
          <button onClick={() => this.stepCountChange(10)}> {">>"} </button>
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
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
                      this.props.unfollow(u.id); }}
                  >
                    UNFOLLOW </button> ) : ( <button onClick={() => { this.props.follow(u.id);  }}
                  >
                    FOLLOW  </button>
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
  }
}

export default Users;
