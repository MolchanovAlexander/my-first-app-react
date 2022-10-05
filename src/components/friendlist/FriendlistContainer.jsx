import Friendlist from "components/friendlist/Friendlist";
import { connect } from "react-redux";
import { getUsers, getIsFetching } from "redux/users_seelectors";
import { getUsersThunkCreator } from "redux/users_reducer ";

 //const FriendlistContainer = (props) => {
 	//return <Friendlist friendsData={props.friendsData} isFetching={props.isFetching} />
 //}
let mapStateToProps = (state) => {
	return {
		friendsData: getUsers(state),
		isFetching: getIsFetching(state),
	}
}
let mapDispatchToProps = () => {
	return {
		requestUsers: getUsersThunkCreator,
	}
}
const FriendlistContainer = connect(mapStateToProps, {requestUsers: getUsersThunkCreator,})(Friendlist)
export default FriendlistContainer;
