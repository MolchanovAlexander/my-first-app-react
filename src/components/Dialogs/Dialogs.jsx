import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/MessageItem";

const Dialogs = (props) => {
  let dialogsElements = props.state.messages.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} src={d.src} />
  ));

  let messagesElements = props.state.messages.messagesData.map((m) => (
    <MessageItem message={m.message} />
  ));

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogsElements}</div>

        <div className={s.messages}>
          {messagesElements}{" "}
          <div className={s.postBlock}>
            <h3>My messages</h3>
            <textarea onChange={() => {}} value={"0121"} />

            <div>
              <button onClick={() => {}}>send message</button>
            </div>
            <div className={s.newPost}>{3210}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
