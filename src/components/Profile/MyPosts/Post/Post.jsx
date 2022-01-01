import React from "react";
import s from "./Post.module.css";
import imgMainProfile from 'pic/18.jpg'


const Post = ({likeCount, message}) => { 
  let [like, setLike] = React.useState(likeCount); 
  const gufLike = ()=> {
	  	parseInt(setLike(like +1))
	}
  
  return (

    <div className={s.item}>
      <img src={imgMainProfile} alt="123" />
      {message}
      <div>
        <span onClick={gufLike}> Like  {like}</span>
      </div>
     
    </div>

  );
};

export default Post;
