import React from "react";
import s from "./Friend.module.scss";
import Friend from "./Friend";
import { MappingComponentsArray } from "utils/mappingComponentHelper";
import userPhoto from "../../assets/images/1png.png";

import { useEffect, useState } from "react";


const Friendlist = (props) => {
//	const { requestUsers } = props;
	console.log(props);
	// let [friendsData, setFriendsData] = useState(props.friendsData)
	// const getUsers = async () => {
	// 	await requestUsers(1, 100)
	// }

	// useEffect(() => {
	// 	console.log("useefect1");

	// 	getUsers();
	// 	if (friendsData.length > 0) {
	// 		console.log("useefect2");
	// 		setFriendsData(props.friendsData)
	// 	}
	// }, [props.friendsData]);

	return (
		
			<div>
				

			
					<div>
						<h1>Friends amount: {props.friendsData.length}</h1>
						<div className={s.wrapFriends}>

							{MappingComponentsArray(props.friendsData, s.fullView, s.friend,
								userPhoto)}

						</div>
					</div>
			</div>

		)
};
export default Friendlist;
