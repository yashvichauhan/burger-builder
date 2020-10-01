import React from 'react';

import classes from './burger.css'
import Ingredients from './IngredientsB/Ingredients'

const burger = (props)=>{
    let dynamicBurger = Object.keys(props.ingredients).map(igkey=>{
        return[...Array(props.ingredients[igkey])].map((_,i)=>{
            return <Ingredients key={igkey+i} type={igkey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    if(dynamicBurger.length===0){
        dynamicBurger = <div>Add Ingredients!</div>
    }
    console.log(dynamicBurger)
    return(
        <div className={classes.burger}>
            <Ingredients type="bread-top"></Ingredients>
             {dynamicBurger}
            <Ingredients type="bread-bottom"></Ingredients>
        </div>
    );
}
export default burger;