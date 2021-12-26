import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.dataposts.map(p => <Post message={p.message} likeCount={p.likeCount} />)
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
