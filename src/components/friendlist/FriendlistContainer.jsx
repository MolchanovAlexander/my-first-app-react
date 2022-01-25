import Friendlist from "components/friendlist/Friendlist";
import { connect } from "react-redux";
let mapStateToProps =(state)=>{
	
	return{ 
		friendsData: state.friends.friendsData,
		
	} 
  }
  let mapDispatchToProps=(dispatch)=>{
	return{
		
	}
  }
const FriendlistContainer = connect(mapStateToProps,mapDispatchToProps)(Friendlist)
export default FriendlistContainer;
