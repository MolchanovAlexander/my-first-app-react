import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "redux/messages_reducer  ";
import { connect } from "react-redux";

let mapStateToProps =(state)=>{
  return{ dialogData: state.messages} 
}
let mapDispatchToProps=(dispatch)=>{
  return{
    updateNewMessageBody:(body)=>{
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: ()=>{
      dispatch(sendMessageCreator());
    }
  }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
