import React from "react";
import s from "./Music.module.css";
import img2 from "pic/2.jpg";

const Music = (props) => {
  return (
    <div className={s.music}>
      My MUSIC
      <img src={img2} alt="123" />
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
      </div>
    </div>
  );
};
export default Music;
