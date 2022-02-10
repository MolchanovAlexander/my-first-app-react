
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC , setCurrentPageAC} from 'redux/users_reducer ';
import axios from "axios";
import React from "react";
import Users from "./UsersFunc";

const step = 20;

class UsersContainer extends React.Component {
  toCount = step;
  fromCount = 1;
  pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
  lastPageFromCount =1 +step * Math.floor(this.props.totalUsersCount / this.props.pageSize / step);

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
     	 .then((response) => { this.props.setUsers(response.data);});
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response) => {this.props.setUsers(response.data);});
  };
  stepCountChange = (way) => {
    if (way === "tothelast" && this.toCount < this.pagesCount) {
		this.fromCount = this.lastPageFromCount;
		this.toCount = this.pagesCount;
		this.onPageChanged(this.fromCount);
    } else if (way === "nextpages" && this.toCount < this.pagesCount) {
		this.fromCount = this.toCount + 1;
		this.toCount = this.toCount + step;
		this.onPageChanged(this.fromCount);
    } else if (way === "prevpages" && this.fromCount > 1 && this.fromCount > step) {
		this.fromCount = this.fromCount - step;
		this.toCount = this.fromCount + step - 1;
		this.onPageChanged(this.fromCount);
    } else if (way === "tothefirst" && this.fromCount > 1) {
		this.fromCount = 1;
		this.toCount = step;
		this.onPageChanged(this.fromCount);
    }
   
  };
  render() {
    return  <Users
        toCount={this.toCount}
        fromCount={this.fromCount}
		pagesCount ={this.pagesCount}
        lastPageFromCount={this.lastPageFromCount}
        onPageChanged = {this.onPageChanged}
		stepCountChange ={this.stepCountChange}
		totalUsersCount={this.props.totalUsersCount}
		pageSize ={this.props.pageSize}
		currentPage = {this.props.currentPage}
		users = {this.props.users}
		follow = {this.props.follow}
		unfollow = {this.props.unfollow}
      />
    
  }
}

let mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage:  state.usersPage.currentPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage)=>{
			dispatch(setCurrentPageAC(currentPage))
		}

	}
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);