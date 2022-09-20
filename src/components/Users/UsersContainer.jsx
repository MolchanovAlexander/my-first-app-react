import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setIsFetching,
  setUsersTotalCount,
  setFollowingRun,
  getUsersThunkCreator,
  unfollowSuccess,
  followSuccess

} from "redux/users_reducer ";
import React from "react";
import Users from "./UsersFunc";
import Preloader from "components/preloader/Preloader";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getPageSize, 
  getTotalUsersCount, 
  getCurrentPage, 
  getIsFetching, 
  getPagesCount, 
  getLastPageFromCount,
  getStep, 
  getFromCount, 
  getToCount, 
  getFollowingRun
} from "redux/users_seelectors"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber, fromCount, toCount) => {
    this.props.setCurrentPage(pageNumber, fromCount, toCount);
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
    console.log("render");
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
          setFollowingRun={this.props.setFollowingRun}
          followingRun={this.props.followingRun}
          unfollowSuccess={this.props.unfollowSuccess}
          followSuccess={this.props.followSuccess}

        />
      </>
    );
  }
}

let mapStateToProps = (state) => {

  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    pagesCount: getPagesCount(state),
    lastPageFromCount: getLastPageFromCount(state),
    fromCount: getFromCount(state),
    step: getStep(state),
    toCount: getToCount(state),
    followingRun: getFollowingRun(state)
  };
};/*
let mapStateToProps = (state) => {
  
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
    followingRun: state.usersPage.followingRun
  };
};*/

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      setUsersTotalCount,
      setIsFetching,
      setFollowingRun,
      followSuccess,
      unfollowSuccess,
      requestUsers: getUsersThunkCreator,
    }
  )
)(UsersContainer);


