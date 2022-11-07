import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, setUserProfile,saveProfile, getUserStatus, updateStatus, savePhoto } from "redux/profile_reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux";


class ProfileContainer extends React.Component {
	//isOwner= false

	refreshprofile() {
		let userID = this.props.match.params.userId;
		!userID ? userID = this.props.autorisedUserID : 0;
		this.props.getUserProfile(userID)
		this.props.getUserStatus(userID)
		//this.props.autorisedUserID == this.props.profile.userId ? this.isOwner = 1 :  this.isOwner = 0
	}
	componentDidMount() {
		this.refreshprofile()
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.props.match.params.userId != prevProps.match.params.userId ?
			this.refreshprofile() : 0
	}
	render() {

		return <Profile
			{...this.props}
			isOwner={!this.props.match.params.userId}
			//isOwner = {this.isOwner}
			profile={this.props.profile}
			status={this.props.status}
			updateStatus={this.props.updateStatus}
			savePhoto={this.props.savePhoto} />
	}
};



let mapStateToProps = (state) => ({
	profile: state.profile.profile,
	status: state.profile.status,
	autorisedUserID: state.auth.userId,
	isAuth: state.auth.isAuth

})
//console.log(state.profile);

export default compose(
	connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus,saveProfile, updateStatus, savePhoto }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
