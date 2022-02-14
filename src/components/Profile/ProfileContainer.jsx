import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile} from "redux/profile_reducer";
import * as axios from "axios";
import { withRouter } from "react-router";


class ProfileContainer extends React.Component {

	
	componentDidMount(){
		console.log(this.props);
		let userId = this.props.match.params.userId;
		!userId ? userId= 22285 :0;
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		.then((response) => {
			this.props.setUserProfile(response.data);
			});
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

export default connect(mapStateToProps,{ setUserProfile })(WithUrlDataContainerComponent);
