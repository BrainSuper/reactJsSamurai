import React from 'react';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={classes.app__nav}>
            <Link to="/profile">Profile</Link>
            <Link to="/dialogs">Messages</Link>
            <Link to="/">News</Link>
            <Link to="/">Music</Link>
            <Link to="/">Settings</Link>
        </nav>
    );
};

export default Navbar;