import React from 'react';

import logoImg from'../../assets/127 burger-logo.png'
import classes from './logo.css'

const Logo = (props)=>{
    return(
        <div className={classes.logo}>
            <img src={logoImg} alt="Logo"></img>
        </div>
    );
}

export default Logo;