import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import {connect } from 'react-redux';

import Order from '../../components/Burger/orderSummary/orderC'
import Aux from '../../hoc/auxi'
import Button from '../../components/UI/Button/button'
import classes from './checkout.css'
import ContactData from './ContactData/contactData'

class Checkout extends Component{
    goBack=()=>{
        this.props.history.goBack()
    }
    goContact=()=>{
        this.props.history.push("/checkout/contact")
    }
    render(){
        return(
            <Aux>
                <div className={classes.Checkout}>
                    <Order ing ={this.props.ing} bill={this.props.price}></Order>
                    <Button btnType="Danger" clicked={this.goBack}>Back</Button>
                    <Button btnType="Success" clicked={this.goContact}>Continue</Button>
                </div>
                <Route path={this.props.match.path + '/contact'} component={ContactData}></Route>
            </Aux>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        ing: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout)