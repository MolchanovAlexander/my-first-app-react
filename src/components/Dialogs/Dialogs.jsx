import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Messageitem/MessageItem";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "components/FormsControls/FormControl";
import { maxLengthCreator, required } from "utils/validators/validators";
const maxLehgth100 = maxLengthCreator(50)

const Dialogs = (props) => {
  //if(!props.isAuth) return <Redirect to={'./login'} />

  let state = props.dialogData;
  let dialogsElements = state.dialogData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} src={d.src} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <MessageItem key={m.id} message={m.message} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>{messagesElements} </div>
      <NewMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div className={s.postBlock}>
        <h3>My messages</h3>
        <Field
          component={Textarea}
          validate={[required, maxLehgth100]}
          name="newMessageBody"
          placeholder="enter your message"
        />

        <div>
          <button>send message</button>
        </div>
        <div className={s.newPost}>{3210}</div>
      </div>
    </form>
  );
};
const NewMessageReduxForm = reduxForm({ form: "newMessage" })(AddMessageForm);
export default Dialogs;
