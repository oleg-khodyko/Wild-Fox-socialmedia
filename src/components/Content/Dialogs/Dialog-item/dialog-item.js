import React from "react";
import { NavLink } from "react-router-dom";
import classes from './dialog-item.module.css'; 

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
        return (
            <div className={classes.dialog}>
                <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
            </div>
        )
}

export default DialogItem;