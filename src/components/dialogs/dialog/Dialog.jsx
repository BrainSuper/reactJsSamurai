import React from 'react';
import classes from "../dialog/Dialog.module.css";

const Dialog = ({name}) => {
    return (
        <div className={classes.dialogs__name}><a href="">{name}</a></div>
    );
};

export default Dialog;