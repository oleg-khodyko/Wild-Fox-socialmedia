import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "../Content/content";
import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import classes from './app.module.css';

const App = ({dialogs, messages, posts}) => {

    return (
        <BrowserRouter>
            <div className={classes.wrapper}>
                <Header />
                <Navigation />
                <div className={classes.content}>
                    <Content 
                    dialogs={dialogs} 
                    messages={messages}
                    posts={posts}/>
                </div> 
            </div>
        </BrowserRouter>
    )
}

export default App;