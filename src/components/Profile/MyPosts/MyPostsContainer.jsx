import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "redux/profile_reducer ";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let postsElements = props.dataposts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost()
    props.dispatch(addPostActionCreator());
  };
  let postOnChange = (text) => {
   
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    
  };
  return (
    < MyPosts updateNewPostText= {postOnChange}/>
  );
};
export default MyPostsContainer ;
