import React from 'react'

import classes from './toolbar.css'
import Logo from '../../Navigation/logo'
import NavItems from '../NavigationItems/navigationItems'

const toolBar = (props)=>{
    return(
    <header className={classes.toolbar}>
        <Logo></Logo>
        <nav>
        <NavItems/>
        </nav>
        
    </header>);
}

export default toolBar;