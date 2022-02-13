import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile} from "redux/profile_reducer";
import * as axios from "axios";


class ProfileContainer extends React.Component {

	componentDidMount(){
		console.log(this.props);
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


export default connect(mapStateToProps,{ setUserProfile })(ProfileContainer);
