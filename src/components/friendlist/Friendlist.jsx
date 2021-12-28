import React from "react";
import s from "./Friendlist.module.css";
import Friend from "components/friends/friend/Friend";


const Friendlist = (props) => {
	
	let friendsElements = props.friends.map(d => <Friend name={d.name} src={d.src} />)
   

	return (
		<div >
			Friends amount: {props.friends.length}
			<div className={s.fullView}>
				{friendsElements}
			</div> 
			
		</div>
	);
};
export default Friendlist;