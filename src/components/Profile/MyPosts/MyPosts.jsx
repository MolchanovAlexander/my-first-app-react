import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  
  return (
   <div>
     My Posts
      <div className={s.newPosts}>new</div>
      <div className={s.newPost}>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
       <Post message='Wow you guf?' likeCount={1}/>
       <Post message="It's Fist guf?"likeCount={5}/>
       <Post message='Wow you guf?' likeCount={1}/>
       <Post message="It's Fist guf?"likeCount={5}/>
      </div>
    </div>
  );
};
export default MyPosts;
