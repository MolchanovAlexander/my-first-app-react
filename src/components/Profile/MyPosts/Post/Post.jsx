import React from "react";
import s from "./Post.module.css";

const Post = ({likeCount, message}) => { 
  let [like, setLike] = React.useState(likeCount); 
  const gufLike = ()=> parseInt(setLike(like +1));
  
  return (

    <div className={s.item}>
      <img src="https://www.artmajeur.com/medias/home/3/-/3-14avka/artwork/14412113_img-20210413-112637.jpg" alt="123" />
      {message}
      <div>
        <span onClick={gufLike}>Like{like}</span>
      </div>
     
    </div>

  );
};

export default Post;
