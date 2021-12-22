import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  return (
    <div className={ s.postBlock }>
      <h3>My Posts</h3>
      <textarea></textarea>
      <div><button>Add Post</button></div>
      <div className={ s.newPost }>

        <Post message='Wow you guf?' likeCount={ 1 } />
        <Post message="It's Fist guf?" likeCount={ 5 } />
        <Post message='Wow you guf?' likeCount={ 1 } />
        <Post message="It's Fist guf?" likeCount={ 5 } />
      </div>
    </div>
  );
};
export default MyPosts;
