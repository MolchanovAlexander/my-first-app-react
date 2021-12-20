import React from "react";
import s from "./News.module.css";
import img2 from "./src/pic/2.jpg"

const News = (props) => {
  
  return (
   <div className={s.newsItems}><img src={img2} alt="123" />
     My NEWS
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
