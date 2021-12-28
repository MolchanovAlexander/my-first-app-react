import React from "react";
import s from "./Friend.module.css";



const Friend = (props) => {


	// let dialogsElements = props.dData.map(d => <DialogItem name={d.name} id={d.id} />)
	// let messagesElements = props.mData.map(m => <MessageItem message={m.message} />)


	return (
		<div className={s.fullView}>
			<div className={s.online}>

			</div>
			<div className={s.friend}>
				<img
					src={props.src}
					alt="img" />

			</div>
			<div>
				{props.name}
			</div>
		</div>
	);
};
export default Friend;
