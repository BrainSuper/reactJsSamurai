import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";

const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Clyde'},
        {id: 2, name: 'Melina'},
        {id: 3, name: 'Ronda'},
        {id: 4, name: 'Charles'},

    ]
    const messageData = [
        {id: 1, message: 'Abraabraabraabra'},
        {id: 2, message: 'SSKKKDLLFKKAKKSLLFKKS'},
        {id: 3, message: 'ASFLSFGSOE#%#FDGKDSGKDSLH'},
    ]
    return (
        <>
            <h1>Dialogs</h1>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__names}>
                    <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>

                </div>
                <div className={classes.dialogs__messages}>
                    <Message message={messageData[0].message}/>
                    <Message message={messageData[1].message}/>
                    <Message message={messageData[2].message}/>
                </div>
            </div>
        </>

    )
        ;
};

export default Dialogs;