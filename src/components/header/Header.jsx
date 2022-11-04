import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.app__header}>
            <img src="https://www.logodesign.net/logo-new/owl-on-scale-legal-icon-6854ld.png" alt="logo"/>
        </header>
    );
};

export default Header;