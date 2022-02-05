import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/MessageItem";

const Dialogs = (props) => {
  let state = props.dialogData;
  let dialogsElements = state.dialogData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} src={d.src} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <MessageItem key={m.id} message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogsElements}</div>

        <div className={s.messages}>
          {messagesElements}{" "}
          <div className={s.postBlock}>
            <h3>My messages</h3>
            <textarea
              placeholder="enter your message"
              onChange={onNewMessageChange}
              value={newMessageBody}
            />

            <div>
              <button onClick={onSendMessageClick}>send message</button>
            </div>
            <div className={s.newPost}>{3210}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
