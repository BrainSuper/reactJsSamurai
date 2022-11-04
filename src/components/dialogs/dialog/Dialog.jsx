import React from 'react';
import classes from "../dialog/Dialog.module.css";
import {Link} from "react-router-dom";

const Dialog = ({name, id}) => {
    return (
        <div className={classes.dialogs__name}><Link to={"/dialogs/" + id}>{name}</Link></div>
    );
};

export default Dialog;