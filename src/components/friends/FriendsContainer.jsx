import Friends from "./Friends";
import { connect } from "react-redux";
import { getFollowedUsers , getFollowingRun} from "redux/users_seelectors";


let mapStateToProps =(state)=>{
	
	return{ 
		friendsData: state.usersPage.followed,
		followingRun: state.usersPage.followingRun
	} 
  }
  let mapDispatchToProps=()=>{
	return{
		
	}
  }
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)
export default FriendsContainer;
