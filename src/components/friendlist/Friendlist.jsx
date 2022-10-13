import React from "react";
import s from "./Friend.module.scss";
import { MappingComponentsArray } from "utils/mappingComponentHelper";
import userPhoto from "../../assets/images/1png.png";


const Friendlist = (props) => {
let amount = props.friendsData
	return (

		<div>
			<div>
				<h1>Friends amount: {props.friendsData.length}</h1>
				<div className={s.wrapFriends}>

					{MappingComponentsArray(amount, s.fullView, s.friend,
						userPhoto)}

				</div>
			</div>
		</div>

	)
};
export default Friendlist;
