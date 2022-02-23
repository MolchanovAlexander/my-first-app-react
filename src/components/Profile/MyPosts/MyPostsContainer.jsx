import { addPost } from "redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dataposts: state.profile.postsData,
    newPostText: state.profile.newPostText,
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (newPostBody) => {
//       dispatch(sendMessageCreator(newPostBody));
//     },
//   };
// };

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
