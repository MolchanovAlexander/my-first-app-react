import { NavLink } from "react-router-dom"
import React from "react"

export const MappingComponentsArray = (items,
	 stylesUser,stylesPhoto,userPhoto,
	  styleFollow = null, followingRun = null,following = null) => {
    
	return items.map((u) => (
		<div key={u.id} className = {stylesUser}>
		  <span>
			<div>
			  <NavLink to={'/profile/'+ u.id}>
			  <img
				src={u.photos.small != null ? u.photos.small : userPhoto}
				alt="user photo"
				className={stylesPhoto}
			  />
			   </NavLink>
			</div> 
			<div>
			  {followingRun !=null ? (u.followed  ? (
				<button className={styleFollow} disabled={followingRun.some(id => id === u.id)}
				  onClick={() => {
					following(u.id, false)
				  }}
				>
				  UNFOLLOW
				</button>
			  ) : (
				<button disabled={followingRun.some(id => id === u.id)}
				  onClick={() => {
					  following(u.id,true)
				  }}
				>
				  FOLLOW
				</button>
			  )): null}
			</div>
		  </span>
		  <span>
			<span>
			  <div>{u.name}</div>
			  <div>{u.status}</div>
			</span>
			<span>
			  <div>{u.id}</div>
			  <div>{"u.location.city"}</div>
			</span>
		  </span>
		</div>
		
	  ))}

