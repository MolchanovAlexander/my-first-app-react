import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "redux/messages_reducer  ";

const DialogsContainer = (props) => {
  let state = props.store.getState().messages;

  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogData={state}
    />
  );
};
export default DialogsContainer;
