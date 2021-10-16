import React from "react";
import classes from './message-item.module.css';

const MessageItem = ({message}) => {
    return (
        <div className={classes.message}> {message} </div>
    )
}

export default MessageItem;