import Users from 'components/Users/UsersClass'
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from 'redux/users_reducer ';


let mapStateToProps = (state) => {
	//console.log(state.usersPage.users);
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