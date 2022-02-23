import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/MessageItem";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {
  //if(!props.isAuth) return <Redirect to={'./login'} />
  let onSubmit = (formData) => {
	console.log(formData);
  };

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
      </div><div className={s.messages}>
        {messagesElements}{" "}</div>
      <NewMessageReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const AddMessageForm = (props) => {
	
  return (
    <form onSubmit={props.handleSubmit} action="">
      
        <div className={s.postBlock}>
          <h3>My messages</h3>
		  <Field component={"textarea"} name="newMessageBody" placeholder="enter your message" />
         
          <div>
            <button >send message</button>
          </div>
          <div className={s.newPost}>{3210}</div>
        </div>
      
    </form>
  );
};
const NewMessageReduxForm = reduxForm({ form: "newMessage" })(AddMessageForm);
export default Dialogs;
