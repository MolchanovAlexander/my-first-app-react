import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <a>Profile</a>
      </div>
      <div className={classes.item}>
        <a>Messeges</a>
      </div>
      <div className={classes.item}>
        <a>News gurrrf</a>
      </div>
      <div className={classes.item}>
        <a>Musik</a>
      </div>
    </nav>
  );
};
export default NavBar;
