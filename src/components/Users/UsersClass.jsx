import axios from 'axios';
import React from 'react'
import styles from './Users.module.css'
import userPhoto from "../../assets/images/1png.png";


class Users extends React.Component {


	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0
		/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data)
				console.log(response.data);
			});
	}
	render() {

		let pagesCount =Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages =[];

		 for(let i=1; i <= pagesCount; i++){
			 pages.push(i);
		 }

		return <div>
					<div>
					{pages.map(p =>{
						return (<span  className={this.props.currentPage === p && styles.selectedPage} 
							onClick{...() => {this.props.setCurrentPage(p)}} >{p}</span>)
					})}
						
					</div>
			{
				this.props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} alt='user photo' className={styles.userPhoto} />
						</div>
						<div>
							{u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>UNFOLLOW</button> : <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button>}

						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city"}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	}
}

export default Users;