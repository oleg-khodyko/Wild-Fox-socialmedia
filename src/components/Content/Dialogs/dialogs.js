import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./Dialog-item/dialog-item";
import classes from './dialogs.module.css';
import MessageItem from "./Message-item/message-item";

const Dialogs = ({dialogs, messages}) => {

    let dialogElements = dialogs.map((dialogs) => {
        return <DialogItem name={dialogs.name} id={dialogs.id} />
    });
    
    let messageElements = messages.map((messages) => {
            return <MessageItem message={messages.message}/>
    });

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogItems}> {dialogElements} </div>
            <div className={classes.messages}> {messageElements} </div>
        </div>
    ) 
}

export default Dialogs;