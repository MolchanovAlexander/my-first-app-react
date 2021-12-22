import React from "react";
import s from "./Settings.module.css";
import img2 from 'pic/4.jpg'


const Settings = (props) => {

  return (
    <div >
      My Settings
      <img src={ img2 } alt="123" />
      <div >
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>

      </div>
    </div>
  );
};
export default Settings;
