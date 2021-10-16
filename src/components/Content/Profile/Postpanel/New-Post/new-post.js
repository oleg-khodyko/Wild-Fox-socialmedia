import React from 'react';
import classes from './new-post.module.css';

const NewPost = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>My posts:</div>
            <textarea 
                className={classes.newNews} 
                placeholder="Your news...">
            </textarea>
        </div>  
    )
};

export default NewPost;