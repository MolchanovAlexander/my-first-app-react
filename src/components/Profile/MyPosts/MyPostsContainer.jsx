import {
  addPost,
  updateNewPostText,
} from "redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dataposts: state.profile.postsData,
    newPostText: state.profile.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost,
})(MyPosts);

export default MyPostsContainer;
