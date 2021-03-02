import React from 'react'

const Order = (props)=>{
    let list_ing=null;
    if(props.ing){
        list_ing = Object.keys(props.ing).map(function(key, index) {
            return (<li key={index}>{key+"\t"+props.ing[key]}</li>)
        });
    }
    return(
        <div>
            <div><h3>Order Summary</h3></div>
            <ul>
                {list_ing}
            </ul>
            <p>Total Bill: {props.bill } INR</p>
        </div>
    );  
}

export default Order;
