import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.dataposts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <textarea ref={newPostElement}></textarea>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={s.newPost}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
