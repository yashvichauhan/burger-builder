import React from 'react'

import classes from './input.css'

const input =(props)=>{
    let inpElement=null
        switch(props.inptype){
            case('input'):
                inpElement=<input className={classes.inp} {...props} required={true}/>
                break;
            case('textarea'):
                inpElement =<text className={classes.inp} {...props}/>
                break;
            default:
                inpElement=<input className={classes.inp} {...props}/>        
        }
    return (
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            {inpElement}
        </div>
    )
}

export default input