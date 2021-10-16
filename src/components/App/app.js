import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "../Content/content";
import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import classes from './app.module.css';

const App = ({state}) => {
debugger;
    return (
        <BrowserRouter>
            <div className={classes.wrapper}>
                <Header />
                <Navigation />
                <div className={classes.content}>
                <Content 
                     state={state.dialogsPage} 
                     posts={state.profilePage.postsData}/> 
                </div> 
            </div>
        </BrowserRouter>
    )
}

export default App;