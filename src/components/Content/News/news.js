import React from "react";
import classes from './news.module.css';

const News = (props) => {
    return (
        <div className={classes.wrapper}>{props.content}</div>
    )
}

export default News;