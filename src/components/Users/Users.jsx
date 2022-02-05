import axios from 'axios';
import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {
	let key = 1;
	// this is not good

	if (props.users.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0");
		props.setUsers([
			{ id: 1, followed: true, fullName: 'dniwe', status: "How are you guf ?", location: { city: 'city17', country: 'Belarus' }, src: 'https://images.unsplash.com/photo-1541433621554-05421e3a3e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
			{ id: 2, followed: false, fullName: 'yu78yu', status: "Ya dno guf guf ?", location: { city: 'Spriengfield', country: 'Romania' }, src: 'https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
			{ id: 3, followed: true, fullName: '1a2s3f4h', status: "STATUS 1111 2?", location: { city: 'Chop', country: 'Ukraine' }, src: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
			{ id: 4, followed: true, fullName: 'DmitroOvsyanikov', status: "Arbeit", location: { city: 'NoName', country: 'Cheh' }, src: 'https://static1.iod.media/storage/authors/photo/1593764728_dmitriy-monatik.jpg' }
		])
	}

	return <div>
		{
			props.users.map(u => <div key={key++}>
				<span>
					<div>
						<img src={u.src} alt='xfgd' className={styles.userPhoto} />
					</div>
					<div>
						{u.followed ? <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button> : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>}

					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;