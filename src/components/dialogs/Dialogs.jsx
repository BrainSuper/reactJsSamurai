import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";

const Dialogs = ({dialogsData, messageData}) => {


    return (
        <>
            <h1>Dialogs</h1>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__names}>
                    {dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
                </div>
                <div className={classes.dialogs__messages}>
                    {messageData.map(message => <Message message={message.message}/>)}
                </div>
            </div>
        </>

    )
        ;
};

export default Dialogs;