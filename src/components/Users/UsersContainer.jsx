import React from 'react';
import Users from 'components/Users/Users'
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from 'redux/users_reducer ';


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
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
		}

	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);