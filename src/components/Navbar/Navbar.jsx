import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
const Navbar = () => {
    return <nav className={classes.nav}>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to='profile' activeClassName={classes.active}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='Dialogs' activeClassName={classes.active}>Messeges</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="News" activeClassName={classes.active}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="Music" activeClassName={classes.active}>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="Settings" activeClassName={classes.active}>Settings</NavLink>
    </div>
  </nav>
}
export default Navbar;