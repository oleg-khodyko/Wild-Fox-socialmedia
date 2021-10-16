import React from "react";
import classes from './button.module.css';

const Button = ({content}) => {
    return(
        <div className={classes.wrapper}>
            <button>{content}</button>
        </div>
    )
}

export default Button;