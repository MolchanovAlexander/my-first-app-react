import { NavLink } from "react-router-dom"
import React from "react"

export const MappingComponentsArray = (items, stylesUser,stylesPhoto,userPhoto, styleFollow, followingRun,unfollowSuccess,followSuccess) => {
    
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
			  {u.followed ? (
				<button className={styleFollow} disabled={followingRun.some(id => id === u.id)}
				  onClick={() => {
					unfollowSuccess(u.id)
				  }}
				>
				  UNFOLLOW
				</button>
			  ) : (
				<button disabled={followingRun.some(id => id === u.id)}
				  onClick={() => {
					  followSuccess(u.id)
				  }}
				>
				  FOLLOW
				</button>
			  )}
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

