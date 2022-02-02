import Friendlist from "components/friendlist/Friendlist";
import { friendDeleteActionCreator } from "redux/friends_reducer";
import { connect } from "react-redux";
let mapStateToProps =(state)=>{
	
	return{ 
		friendsData: state.friends.friendsData,
		
		
	} 
  }
  let mapDispatchToProps=(dispatch)=>{
	return{
		deleteFriend: (friendId)=>{
			let action = friendDeleteActionCreator(friendId);
			dispatch(action); 
		}
	}
  }
const FriendlistContainer = connect(mapStateToProps,mapDispatchToProps)(Friendlist)
export default FriendlistContainer;
