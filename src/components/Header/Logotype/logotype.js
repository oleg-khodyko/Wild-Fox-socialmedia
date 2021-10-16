import React from "react";
import classes from './logotype.module.css';
import logo from './fox-logo.png';
import textLogo from './title-logo.png';

const Logotype = () => {
    return (
        <div className={classes.wrapper}>
            
            <div className={classes.image}>
                <img src={logo} />
            </div>

            <div className={classes.title}>
                <img src={textLogo}/>
            </div>

        </div>
    )
}

export default Logotype;