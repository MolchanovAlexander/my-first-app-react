import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import FriendsContainer from 'components/friends/FriendsContainer'

const NavBar = (props) => {
  return (
    <nav className={ s.nav }>
      <div className={ `${s.item} ` }>
        <NavLink to='/profile' activeClassName={s.active }>Profile</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='/dialogs' activeClassName={s.active }>Messeges</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/news" activeClassName={s.active }>News</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/music" activeClassName={s.active }>Music</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to="/settings" activeClassName={s.active }>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active }>Users</NavLink>
      </div>
      
      <div className={ s.friends }>
        <div className={ s.item }>
        <NavLink to="/friendlist" activeClassName={s.active }>Friends</NavLink>
      </div>
        <FriendsContainer />
      </div>
    </nav>
  );
};
export default NavBar;
