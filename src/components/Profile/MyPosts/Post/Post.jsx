import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  var lichilnik = 2;
  function gufLike() {
    alert('++')
    lichilnik++;

  }
  return (

    <div className={s.item}>
      <img src="https://www.artmajeur.com/medias/home/3/-/3-14avka/artwork/14412113_img-20210413-112637.jpg" alt="123" />
      {props.message}
      <div>
        <span onclick = "gufLike()">Like{lichilnik}</span>
      </div>
     
    </div>

  );
};
export default Post;
