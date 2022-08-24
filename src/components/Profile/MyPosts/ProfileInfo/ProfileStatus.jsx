import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidMount(){
    console.log('renderprofStatus');
  }
  componentDidUpdate(prevProps, prevState) {
   
    if (prevProps.status !== this.props.status)
      this.setState({
        status: this.props.status,
      });
    // let a = this.state;
    // let b = this.props;
    // console.log(a, b);
  }
  render() {
    console.log('renderprofStatus');
    return (
      <>
        <div>
          {!this.state.editMode && (
            <div>
              <span onClick={this.activateEditMode}>
                Status: {this.props.status || "no status"}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                value={this.state.status}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}
export default ProfileStatus;
