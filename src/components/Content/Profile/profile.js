import React from 'react';
import PostPanel from './Postpanel/post-panel';
import classes from './profile.module.css';
import UserInfo from './Userinfo/user-info';

const Profile = ({posts}) => {

    return (
        <div className={classes.wrapper}>
            <UserInfo />
            <PostPanel posts={posts}/>
        </div>
    )
}

export default Profile;