import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, setUserProfile} from "redux/profile_reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import { compose } from "redux";


class ProfileContainer extends React.Component {

	
	componentDidMount(){
		
		let userID = this.props.match.params.userId;
		!userID ? userID = 22285 :NaN;
		this.props.getUserProfile(userID)
	}
	render(){
		
		return <Profile {...this.props} profile={this.props.profile} />
		
	}
};



let mapStateToProps =(state) => ({
	profile: state.profile.profile,
})


export default compose(
	connect(mapStateToProps,{ setUserProfile , getUserProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
