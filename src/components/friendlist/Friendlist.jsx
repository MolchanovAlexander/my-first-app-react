import React from "react";
import s from "./Friendlist.module.css";
import Friend from "./Friend";


const Friendlist = (props) => {
	let key = 1;
	
	let friendsElements = props.friendsData.map(d => <Friend key={key++} del={props.deleteFriend} id={d.id} name={d.name} src={d.src} status={d.status} />)
	

	return (
		<div >
			Friends amount: {props.friendsData.length}
			<div className={s.fullView}>
				{friendsElements}
			</div> 
			
		</div>
	);
};
export default Friendlist;
