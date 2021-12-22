import React from "react";
import s from "./Music.module.css";
import img2 from 'pic/galyna.jpg'

const Music = (props) => {

  return (
    <div >
      My MUSIC
      <img src={ img2 } alt="123" />
      <div >
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>

      </div>
    </div>
  );
};
export default Music;
