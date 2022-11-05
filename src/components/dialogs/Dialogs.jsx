import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";

const Dialogs = ({dialogsPage}) => {


    return (
        <>
            <h1>Dialogs</h1>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__names}>
                    {dialogsPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
                </div>
                <div className={classes.dialogs__messages}>
                    {dialogsPage.messageData.map(message => <Message message={message.message}/>)}
                </div>
            </div>
        </>

    )
        ;
};

export default Dialogs;