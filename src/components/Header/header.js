import React, {Component} from 'react';
import classes from './header.module.css';
import HeaderMenu from './HeaderMenu/header-menu';
import Logotype from './Logotype/logotype';
import Search from './Searchpanel/searchpanel';


const Header = () => {
    return (
        <div className={classes.wrapper}>
            <Logotype />
            <HeaderMenu />
            <Search />
        </div>
    )
}

export default Header;