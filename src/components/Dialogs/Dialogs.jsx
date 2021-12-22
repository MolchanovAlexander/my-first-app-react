import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogComp = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={ s.dialog + ' ' + s.active }> <NavLink to={ path }>{ props.name }</NavLink></div>
  )
}
const MessageComp = (props) => {
  return (
    <div className={ s.message }>{ props.message }</div>
  )
}

const Dialogs = (props) => {

  return (
    <div >
      <div className={ s.dialogs }>
        <div className={ s.dialogsItem }>
          <DialogComp name="Gufiy" id={ 1 } />
          <DialogComp name="Nykyhvir" id={ 2 } />
          <DialogComp name="Dniwe" id={ 3 } />
          <DialogComp name="Ilona" id={ 4 } />
          <DialogComp name="Alesya" id={ 5 } />
          <DialogComp name="Katya" id={ 6 } />
          <DialogComp name="Sveta" id={ 7 } />
        </div>

        <div className={ s.messages }>
          <MessageComp message="How Guf came in to your house?" />
          <MessageComp message="la la la " />
          <MessageComp message="How Guf cam!!" />
          <MessageComp message="How Guf came in to" />
          <MessageComp message="Hello Dniwe" />
          <MessageComp message="H11112 came in to your ho...." />
          <MessageComp message="hjkk to your house?" />
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
