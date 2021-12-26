import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/MessageItem";


const Dialogs = (props) => {
<<<<<<< HEAD
  
  let dialogsElements = props.dData.map(d => <DialogComp name={d.name} id={d.id} />)
  let messagesElements = props.mData.map(m => <MessageComp message={m.message} />)
=======
  let dialogData = [
    { id: 1, name: "Gufiy" },
    { id: 2, name: "Nykyhvir" },
    { id: 3, name: "Dniwe" },
    { id: 4, name: "Ilona" },
    { id: 5, name: "Alesya" },
    { id: 6, name: "Katya" },
    { id: 7, name: "Sveta" }
  ]

  let messagesData = [
    { id: 1, message: "How Guf came in to your house?" },
    { id: 2, message: "la la la " },
    { id: 3, message: "How Guf cam!!" },
    { id: 4, message: "How Guf came in to" },
    { id: 5, message: "Hello Dniwe" },
    { id: 6, message: "H11112 came in to your ho...." },
    { id: 7, message: "hjkk to your house?" }
  ]
  let dialogsElements = dialogData.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = messagesData.map(m => <MessageItem message={m.message} />)
>>>>>>> ac6f20f81df9baf03c268f4d991864e2ac21b190

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
