import React from 'react';
import classes from './searchpanel.module.css';

const Search = () => {
    return (
        <div className={classes.wrapper}>
            <input placeholder='Search...'></input>
        </div>
    ) 
}

export default Search;