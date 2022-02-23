import Dialogs from "./Dialogs";
import { sendMessageCreator } from "redux/messages_reducer  ";
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
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
