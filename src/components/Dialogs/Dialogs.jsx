import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/MessageItem";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "redux/messages_reducer  ";

const Dialogs = (props) => {
  let state = props.store.getState();
  let dialogsElements = state.messages.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} src={d.src} />
  ));

  let messagesElements = state.messages.messagesData.map((m) => (
    <MessageItem message={m.message} />
  ));
  let newMessageBody = state.messages.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
