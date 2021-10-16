import React from "react";
import classes from './user-info.module.css';
import avatar from './user.jpg';

const UserInfo = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <img src={avatar} />
            </div>
            <div className={classes.description}>
                <div className={classes.fullName}>Oleg Khodyko</div>
                <div className={classes.info}>
                    <p>Дата рождения:</p>
                    <p>Город:</p>
                    <p>Образование:</p>
                    <p>Instagram:</p>
                </div>
            </div>
          
        </div>
    )
}

export default UserInfo;