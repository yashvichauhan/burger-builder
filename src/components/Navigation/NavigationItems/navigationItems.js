import React from 'react';

import NavItem from './navItem/navItem'
import classes from './navigationItems.css'

const navigationItems = (props)=>{
    return(
        <ul className={classes.navigationItems}>
            <NavItem link="/" active>Burger Build</NavItem>
            <NavItem link="/checkout">Checkout</NavItem>
            <NavItem link="/orders">Orders</NavItem>
            <NavItem link="/login">Auth</NavItem>
        </ul>
    );
}
export default navigationItems;