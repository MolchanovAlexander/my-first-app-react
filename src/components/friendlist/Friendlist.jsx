import React from "react";
import s from "./Friendlist.module.css";
import Friend from "components/friends/friend/Friend";


const Friendlist = (props) => {
	
	
	let friendsElements = props.friendsData.map(d => <Friend deleteFriend= {d.deleteFriend} id={d.id} name={d.name} src={d.src} status={d.status} />)
	

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
