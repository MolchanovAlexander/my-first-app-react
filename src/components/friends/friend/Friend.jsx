import React from "react";
import s from "./Friend.module.scss";



const Friend = (props) => {
	
	let online=s.offline;
	
	props.status ? online=s.online : online=s.offline;

	
	let onDeleteFriend = () => {
		console.log(props.id)
		let friendId = props.id;
		props.del(friendId);
	  };

	return (
		<div className={s.fullView}>
			<div className={online}>

			</div>
			<div className={s.friend}>
				<img
					src={props.src}
					alt="img" />
					<div className={s.butt}>
						<button onClick={onDeleteFriend}>del</button>
						<button onClick={onDeleteFriend}>del</button>
					</div>

			</div>
			<div>
				{props.name}
			</div>
		</div>
	);
};
export default Friend;
