import Users from 'components/Users/UsersClass'
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from 'redux/users_reducer ';


let mapStateToProps = (state) => {
	console.log(state.usersPage.users);
	console.log(state.usersPage.pageSize);
	console.log(state.usersPage.totalUsersCount);
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
export default connect(mapStateToProps, mapDispatchToProps)(Users);