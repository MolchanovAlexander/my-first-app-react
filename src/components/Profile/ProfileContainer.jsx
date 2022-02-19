import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, setUserProfile} from "redux/profile_reducer";
import { withRouter } from "react-router";



class ProfileContainer extends React.Component {

	
	componentDidMount(){
		console.log(this.props);
		let userID = this.props.match.params.userId;
		!userID ? userID = 22285 :NaN;
		this.props.getUserProfile(userID)
	}
	render(){
		return (
			<Profile {...this.props} profile={this.props.profile} />
		);
	}
};
let mapStateToProps =(state) => ({
	profile: state.profile.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{ setUserProfile , getUserProfile})(WithUrlDataContainerComponent);
