import React from "react";
import s from "./Friend.module.css";



const Friend = (props) => {
	let online=s.offline;
	props.status ? online=s.online : online=s.offline;


	return (
		<div className={s.fullView}>
			<div className={online}>

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
