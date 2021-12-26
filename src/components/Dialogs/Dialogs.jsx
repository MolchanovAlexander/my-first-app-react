import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogComp = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={s.dialog + ' ' + s.active}> <NavLink to={path}>{props.name}</NavLink></div>
  )
}
const MessageComp = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  
  let dialogsElements = props.dData.map(d => <DialogComp name={d.name} id={d.id} />)
  let messagesElements = props.mData.map(m => <MessageComp message={m.message} />)

  return (
    <div >
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {dialogsElements}
        </div>

        <div className={s.messages}>
        {messagesElements}
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
