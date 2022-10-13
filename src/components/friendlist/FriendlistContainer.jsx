import Friendlist from "components/friendlist/Friendlist";
import { connect } from "react-redux";
import { getFollowedUsers, getIsFetching } from "redux/users_seelectors";

let mapStateToProps = (state) => {
	return {
		friendsData: getFollowedUsers(state),
		isFetching: getIsFetching(state),
	}
}
let mapDispatchToProps = () => {
	return {
		
	}
}
const FriendlistContainer = connect(mapStateToProps, mapDispatchToProps)(Friendlist)
export default FriendlistContainer;
