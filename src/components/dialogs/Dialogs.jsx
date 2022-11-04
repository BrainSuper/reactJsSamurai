import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";

const Dialogs = () => {
    return (
        <>
            <h1>Dialogs</h1>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__names}>
                    <Dialog name={'Clyde'}/>
                    <Dialog name={'Melina'}/>
                    <Dialog name={'Ronda'}/>
                    <Dialog name={'Charles'}/>
                </div>
                <div className={classes.dialogs__messages}>
                    <Message/>
                </div>
            </div>
        </>

    )
        ;
};

export default Dialogs;