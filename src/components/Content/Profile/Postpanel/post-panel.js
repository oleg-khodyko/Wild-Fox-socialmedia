import React from "react";
import Button from "./Button/button";
import NewPost from "./New-Post/new-post";
import PostHistory from "./Post-History/post-history";
import classes from './post-panel.module.css';

const PostPanel = ({posts}) => {

    let postElements = posts.map((posts) => {
        return <PostHistory message={posts.message} />
    }); 

    return (
        <div className={classes.wrapper}>
            <NewPost />
            <Button content='Send...' />
            {postElements}
        </div>
    )
}

export default PostPanel;