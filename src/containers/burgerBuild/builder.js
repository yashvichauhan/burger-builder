import React, {Component} from 'react';
import {connect} from 'react-redux';

import Burger from '../../components/Burger/burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import * as reducerType from '../../Store/reducerType'

class builder extends Component{
    //methods
    componentDidMount(){
        //do nothing
    }
    orderHandler = ()=>{
        //redirect
        // const queryParams = [];
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParams.push(encodeURIComponent('totalBill')+'='+encodeURIComponent(this.state.totalPrice))
        // const queryString=queryParams.join('&')
        this.props.history.push('/checkout')
    }
    updatePurchaseState =(ingredients) =>{
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );

        return sum > 0;
    }
    render(){
        const disabledInfo = {
            ...this.props.ing
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <>
                <Burger ingredients={this.props.ing}></Burger>
                <BuildControls  ingredientAdded={this.props.onIngAdded}
                    ingredientRemoved={this.props.onIngRemoved}
                    disabled={disabledInfo}
                    purchasable = {this.updatePurchaseState(this.props.ing)}
                    price={this.props.price}
                    orderHandler = {this.orderHandler}>
                </BuildControls>
            </>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        ing: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onIngAdded : (IngredientName)=>dispatch({type: reducerType.ADD_INGREDIENT, ingName:IngredientName}),
        onIngRemoved : (IngredientName)=>dispatch({type: reducerType.RM_INGREDIENT,ingName:IngredientName})  
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(builder);