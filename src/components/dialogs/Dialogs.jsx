import React, {useState} from 'react';
import classes from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import {addMessageAC, messageChange} from "../../redux/store";

const Dialogs = ({dialogsPage, dispatch}) => {

    return (
        <>
            <h1>Dialogs</h1>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__names}>
                    {dialogsPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
                </div>
                <div className={classes.dialogs__messages}>
                    {dialogsPage.messageData.map(message => <Message message={message.message}/>)}
                    <form className={classes.post__form} onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(addMessageAC());
                    }}>
                        <input type="text" value={dialogsPage.newMessage} onChange={e => dispatch(messageChange(e.target.value))} placeholder='your message'/>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>

    )
        ;
};

export default Dialogs;