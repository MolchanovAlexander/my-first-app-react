import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={classes.item}>
        <a href='/dialogs'>Messeges</a>
      </div>
      <div className={classes.item}>
        <a href="">News gurrrf</a>
      </div>
      <div className={classes.item}>
        <a href="">Musik</a>
      </div>
    </nav>
  );
};
export default NavBar;
