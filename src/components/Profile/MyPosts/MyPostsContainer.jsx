import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from "redux/profile_reducer ";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps =(state)=>{
	return{ 
		dataposts: state.profile.postsData,
		newPostText:state.profile.newPostText
	} 
  }
  let mapDispatchToProps=(dispatch)=>{
	return{
		updateNewPostText:(text)=>{
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);
	  },
	  addPost: ()=>{
		dispatch(addPostActionCreator());
	  }
	}
  }
  const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
  
  
export default MyPostsContainer;
