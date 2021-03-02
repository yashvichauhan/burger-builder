import React, { Component } from 'react'
import {Redirect } from 'react-router'

import axios from '../../axiosInstance'
import Button from '../../components/UI/Button/button'
import Aux from '../../hoc/auxi'
import OrderD from './orderD'

class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        let dummyArr=this.state.orders
        axios.get('https://yc-burger-app.firebaseio.com/orders.json')
        .then((res)=>{
            for(const key in res.data){
                dummyArr.push(res.data[key])
            }
            this.setState({
                orders:dummyArr,
                loading:false
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    gotoHome=()=>{
        this.props.history.push("/")
    }

    render(){
        //check
        console.log(this.state.orders)
        return(
            <Aux>
                {
                    this.state.orders.map((order,index)=>(
                        <OrderD
                        key={index}
                        ingredients={order.order.ingredients}
                        total={order.order.total}
                        />
                    ))
                }
                <Button btnType="Success" clicked={this.gotoHome}>BACK TO HOME</Button>
            </Aux>
        )
    }
}
export default Orders;