import React from 'react';

import Aux from '../../hoc/auxi'
import classes from './layout.css'
import Toolbar from '../Navigation/Toolbar/toolbar'

const layout = (props)=>(
    <Aux>
        <Toolbar></Toolbar>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;