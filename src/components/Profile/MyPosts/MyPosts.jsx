import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "redux/profile_reducer ";

const MyPosts = (props) => {
  let postsElements = props.dataposts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost()
    props.dispatch(addPostActionCreator());
  };
  let postOnChange = () => {
     let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <textarea
        onChange={postOnChange}
        ref={newPostElement}
        value={props.newPostText}
      />

      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={s.newPost}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
