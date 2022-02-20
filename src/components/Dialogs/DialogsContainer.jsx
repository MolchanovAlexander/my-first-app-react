import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "redux/messages_reducer  ";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogData: state.messages,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};


export default compose(
    connect( mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
