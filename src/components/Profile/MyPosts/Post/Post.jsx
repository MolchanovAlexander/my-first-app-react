import React from "react";
import s from "./Post.module.css";
import imgMainProfile from 'pic/18.jpg'


const Post = (props) => { 
  const { post } = props;
  
  const gufLike = ()=> {
      props.addLike({id: post.id, likeCount: post.likeCount + 1})
	}
  
  return (

    <div className={s.item}>
      <img src={imgMainProfile} alt="123" />
      {post.message}
      <div>
        <span onClick={gufLike}> Like  {post.likeCount}</span>
      </div>
     
    </div>

  );
};

export default Post;
