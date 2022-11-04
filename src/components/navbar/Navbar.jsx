import React from 'react';
import classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={classes.app__nav}>
            <a href="">Profile</a>
            <a href="">Messages</a>
            <a href="">News</a>
            <a href="">Music</a>
            <a href="">Settings</a>
        </nav>
    );
};

export default Navbar;