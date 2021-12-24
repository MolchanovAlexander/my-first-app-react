import React from "react";
import s from "./News.module.css";
import img2 from 'pic/stone.jpg'

const News = (props) => {

  return (
    <div className={ s.newsItems }>
      My NEWS
      <img src={ img2 } alt="123" />

      <div ></div>
      <div >
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>

      </div>
    </div>
  );
};
export default News;
