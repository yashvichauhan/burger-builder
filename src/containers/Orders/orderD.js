import React from 'react'

import classes from './orderD.css'

const OrderD =(props)=>{
    return(
        <div className={classes.orderD}>
            <p>Order</p>
            <div className={classes.ingredients}>
                <span>Alooticki({props.ingredients.alooticki})</span>&nbsp;
                <span>Cheese({props.ingredients.cheese})</span>&nbsp;
                <span>Chicken({props.ingredients.chicken})</span>&nbsp;
                <span>Salad({props.ingredients.salad})</span>&nbsp;
            </div>
            <p><strong>Total Bill: {" "+props.total}</strong></p>
        </div>
    )
}

export default OrderD;