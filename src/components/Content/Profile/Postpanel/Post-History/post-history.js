import React from   'react';
import classes from './post-history.module.css';
import anyUser from './any-user.png';

const PostHistory = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.messageContent}>
                <img className={classes.logo} src={anyUser} alt="#"/>
                <div className={classes.message}> {props.message} </div>
            </div>
        </div>
    )
};

export default PostHistory; 