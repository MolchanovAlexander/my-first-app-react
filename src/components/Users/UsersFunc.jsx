import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/1png.png";
import { MappingComponentsArray } from "utils/mappingComponentHelper";


let Users = ({ users, totalUsersCount, pageSize,
	fromCount, toCount, stepCountChange,
	currentPage, onPageChanged, unfollowSuccess
	, followSuccess, followingRun }) => {

	let pages = [];
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	for (let i = fromCount; i <= pagesCount && i <= toCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div className={styles.listPages}>
				<button onClick={() => stepCountChange(0)}> {"<<"} </button>
				<button
					className={styles.button}
					onClick={() => stepCountChange(1)}
				>
					{"Previous 20"}
				</button>
				{pages.map((p) => (
					<div
						key={p}
						className={currentPage === p ? styles.selectedPage : 0}
						onClick={() => onPageChanged(p, fromCount, toCount)}
					>
						{p}
					</div>
				))}
				<button
					className={styles.button}
					onClick={() => stepCountChange(2)}
				>
					{"Next 20     "}
				</button>
				<button onClick={() => stepCountChange(3)}> {">>"} </button>
			</div>
			<div className={styles.body_users}>
				{MappingComponentsArray(users, styles.users, styles.userPhoto,
					userPhoto, styles.followedButton,
					followingRun, unfollowSuccess, followSuccess)}
			</div>
		</div>
	);
};

export default Users;
