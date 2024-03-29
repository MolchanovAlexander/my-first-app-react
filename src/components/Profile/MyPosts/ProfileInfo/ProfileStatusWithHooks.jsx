import React from "react";
import { useEffect, useState} from "react";

const ProfileStatusWithHooks1 = (props) => {
 //console.log(props);
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  useEffect(()=>{
    setStatus(props.status)
  }, [props.status])

  // let stateWithSetState= useState(false)
  // let [editMode, setEditMode] =useState(false)
  // let editMode= stateWithSetState[0]
  // let setEditMode= stateWithSetState[1]

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };
  const activateMode = () => {
    props.isOwner && (props.autorisedId == props.profile.userId) ? setEditMode(true): null
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  };
  return (
    <>
      <div>
        {!editMode && (
          <div>
            <span onDoubleClick={activateMode}>
              <b>Status: </b>{props.status || "no status"}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              onBlur={deactivateEditMode}
              autoFocus={true}
              onChange={onStatusChange}
              value={status}
            />
          </div>
        )}
      </div>
    </>
  );
}
export const ProfileStatusWithHooks = React.memo(ProfileStatusWithHooks1);
