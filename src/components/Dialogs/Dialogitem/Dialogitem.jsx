import React from "react";
import s from "./Dialogitem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={s.dialog + ' ' + s.active}> 
        <NavLink 
		to={path}>
			<div className={s.dialogAva}>
				<div>
					<img 
						src={props.src}
						alt="img" />
				</div>
				<div>
					{props.name}
				</div>
          	</div>
          </NavLink>
    </div>
  )
}

export default DialogItem;
