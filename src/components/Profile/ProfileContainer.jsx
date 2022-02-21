import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, setUserProfile, getUserStatus, updateStatus} from "redux/profile_reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import { compose } from "redux";


class ProfileContainer extends React.Component {

	
	componentDidMount(){
		
		let userID = this.props.match.params.userId;
		!userID ? userID = 22285 :0;
		this.props.getUserProfile(userID)
		this.props.getUserStatus(userID)

	}
	render(){
		
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
		
	}
};



let mapStateToProps =(state) => ({
	profile: state.profile.profile,
	status: state.profile.status
	
})
//console.log(state.profile);

export default compose(
	connect(mapStateToProps,{ setUserProfile , getUserProfile, getUserStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
