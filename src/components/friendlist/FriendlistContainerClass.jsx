import Friendlist from "components/friendlist/Friendlist";
import { connect } from "react-redux";
import { getUsers, getIsFetching } from "redux/users_seelectors";
import { getUsersThunkCreator } from "redux/users_reducer ";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import React from "react";
import { compose } from "redux";
import Preloader from "components/preloader/Preloader";


class FriendlistContainer extends React.Component {
	componentDidMount() {
		this.props.requestUsers(1, 20);
	}	
	render(){
		return (
		this.props.isFetching ? <Preloader/>:
		<Friendlist friendsData={this.props.friendsData} isFetching={this.props.isFetching} />)
	}
}
let mapStateToProps = (state) => {
	return {
		friendsData: getUsers(state),
		isFetching: getIsFetching(state),
	}
}


export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {requestUsers: getUsersThunkCreator,}))(FriendlistContainer);
