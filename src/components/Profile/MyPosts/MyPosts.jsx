import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Posts";

const MyPosts = () => {
  return (
   <div>
     My Posts
      <div className={s.newPosts}>new</div>
      <div className={s.newPost}>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
       <Post />
       <Post />
       <Post />
       <Post />
      </div>
    </div>
  );
};
export default MyPosts;
