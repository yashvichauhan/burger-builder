import React from 'react';

import Aux from '../../hoc/auxi'
import classes from './layout.css'

const layout = (props)=>(
    <Aux>
        <div>Toobar,SideDrawer,Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;