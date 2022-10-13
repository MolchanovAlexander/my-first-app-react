import Friends from "./Friends";
import { connect } from "react-redux";
import { getFollowedUsers } from "redux/users_seelectors";

let mapStateToProps =(state)=>{
	
	return{ 
		friendsData: getFollowedUsers(state),
	} 
  }
  let mapDispatchToProps=()=>{
	return{
	
	}
  }
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)
export default FriendsContainer;
