import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/MessageItem";


const Dialogs = (props) => {

  
  let dialogsElements = props.dData.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.mData.map(m => <MessageItem message={m.message} />)


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
