import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import FriendsContainer from 'components/friends/FriendsContainer'

const NavBar = (props) => {
  return (
    <nav className={ s.nav }>
      <div className={ `${s.item} ` }>
        <NavLink to='/profile' className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='/dialogs' className={ navData => navData.isActive ? s.active : s.item }>Messeges</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/news" className={ navData => navData.isActive ? s.active : s.item }>News</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/music" className={ navData => navData.isActive ? s.active : s.item }>Music</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/settings" className={ navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
      </div>
      
      <div className={ s.friends }>
        <div className={ s.item }>
        <NavLink to="/friendlist" className={ navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
      </div>
        <FriendsContainer />
      </div>
    </nav>
  );
};
export default NavBar;
