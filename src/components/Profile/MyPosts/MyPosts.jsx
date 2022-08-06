import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Textarea} from "components/FormsControls/FormControl.jsx"
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "utils/validators/validators";

let maxLehgth10 = maxLengthCreator(10)
const MyPosts = (props) => {
  let postsElements = props.dataposts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  };
  return (
    <div className={s.postBlock}>
      <NewMyPostsFormRedux onSubmit={addNewPost} />
      <div className={s.newPost}>{postsElements}</div>
    </div>
  );
};
const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h3>My Posts</h3>
      <Field
        component={Textarea}
        name="newPostBody"
        placeholder="what is on your mind"
        validate={[required, maxLehgth10]}
      />

      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const NewMyPostsFormRedux = reduxForm({ form: "newPost" })(MyPostsForm);

export default MyPosts;
