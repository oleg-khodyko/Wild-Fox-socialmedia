import React from 'react';
import { Route } from 'react-router';
import classes from './content.module.css';
import Dialogs from './Dialogs/dialogs';
import Music from './Music/music';
import News from './News/news';
import Profile from './Profile/profile';
import Settings from './Settings/settings';

const Content = ({dialogs, messages, posts}) => {

    return (
        <div className={classes.wrapper}>
            <Route path="/profile" 
                   render={() => <Profile posts={posts}/>} 
            />
            <Route path="/dialogs" 
                   render={() => <Dialogs dialogs={dialogs} messages={messages} />} 
            />
            <Route path="/news" component={News} content='News' />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </div>
    )
}

export default Content;