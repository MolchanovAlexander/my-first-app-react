import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "redux/profile_reducer ";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let postOnChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      dataposts={state.profile.postsData}
      updateNewPostText={postOnChange}
      addPost={addPost}
      newPostText={state.profile.newPostText}
    />
  );
};
export default MyPostsContainer;
