import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, likeCount: 8, message: "How are guf in your house?" },
    { id: 2, likeCount: 0, message: "la la la " },
    { id: 3, likeCount: 2, message: "first Guf crtrtm!!" },
    { id: 4, likeCount: 0, message: "Alo Guf came in to" },
    { id: 5, likeCount: 4, message: "Hello Dniwe" },
    { id: 6, likeCount: 0, message: "Yo nub came in to your ho...." },
    { id: 7, likeCount: 11, message: " like dno?" }
  ]
  let postsElements = postsData.map(p => <Post message={p.message} likeCount={p.likeCount} />)
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <textarea></textarea>
      <div><button>Add Post</button></div>
      <div className={s.newPost}>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
