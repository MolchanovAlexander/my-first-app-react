import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setIsFetching,
  setUsersTotalCount,
} from "redux/users_reducer ";
import axios from "axios";
import React from "react";
import Users from "./UsersFunc";
import Preloader from "components/preloader/Preloader";



class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
          withCredentials: true
        })
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber, fromCount, toCount) => {
    this.props.setCurrentPage(pageNumber, fromCount, toCount);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
          withCredentials: true
        }   )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetching(false);
      });
  };
  stepCountChange = (way) => {
    let from = this.props.fromCount;
    let to = this.props.toCount;

    // 0 - toStart / 1 - previous / 2 - next / 3 - toLast
    let goStart = way === 0 && from > 1;
    let goPrev = way === 1 && from > 1;
    let goNext = way === 2 && to < this.props.pagesCount;
    let goLast = way === 3 && to < this.props.pagesCount;

    if (goLast) {
      from = this.props.lastPageFromCount;
      to = this.props.pagesCount;
      this.onPageChanged(from, from, to);
    } else if (goNext) {
      from = from + this.props.step;
      to = to + this.props.step;
      this.onPageChanged(from, from, to);
    } else if (goPrev) {
      from = from - this.props.step;
      to = from + this.props.step - 1;
      this.onPageChanged(to, from, to);
    } else if (goStart) {
      from = 1;
      to = this.props.step;
      this.onPageChanged(from, from, to);
    }
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          toCount={this.props.toCount}
          fromCount={this.props.fromCount}
          pagesCount={this.pagesCount}
          lastPageFromCount={this.lastPageFromCount}
          onPageChanged={this.onPageChanged}
          stepCountChange={this.stepCountChange}
          totalUsersCount={this.props.totalUsersCount}
          isFetching={this.props.isFetching}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  // console.log(state.usersPage);
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    pagesCount: state.usersPage.pagesCount,
    lastPageFromCount: state.usersPage.lastPageFromCount,
    step: state.usersPage.step,
    fromCount: state.usersPage.fromCount,
    toCount: state.usersPage.toCount,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setIsFetching,
})(UsersContainer);
