import React,{Component} from 'react';
import axios from '../../../axiosInstance'
import {connect} from 'react-redux'
import {Redirect } from 'react-router'

import classes from './contactData.css'
import Button from '../../../components/UI/Button/button'
import Input from '../../../components/UI/Input/input'
import Inputclass from '../../../components/UI/Input/input.css'

class ContactData extends Component {
    state={
        orderData:{
            name:'',
            email:'',
            street:'',
            postalcode:''
        },
        loading:false,
        isValid:[],
        touched:false,
        ordered:false
    }
    
    orderHandler=(event)=>{
        event.preventDefault()
        this.setState({
            loading:true
        })
        //add to the server
        const orderDetail={
            order:{
                ingredients:this.props.ing,
                total:this.props.price
            },
            personal:{
                name:this.state.orderData.name,
                address:{
                    street:this.state.orderData.street,
                    postalcode:this.state.orderData.postalcode
                },
                email:this.state.orderData.email
            }
        }
        axios.post('/orders.json',orderDetail)
        .then(
            response=>{this.setState({
                loading:false,
                ordered:true
                })
            }
        )
        .catch(error=>{this.setState({
            loading:true
        })})
    }
    allValid=(isValid)=>{
      for(var field in isValid)
          if(!isValid[field]) return false;
      return true;
    }
    validateInp = (val,field)=>{
        let isValid=true;
        //for blank input 
        if(field==='email'){
            let regex = /^[A-Za-z0-9._]+@[A-Za-z0-9_.]+\.[A-Za-z0-9]+$/;
            if(!regex.test(val)){
                console.log(regex.test(val))
                return false
            }   
        }
        isValid= !(val.trim()==='')
        //return validation 
        return isValid
    }
    getValues=(event,field)=>{
        let orderReplica=this.state.orderData;
        let val = event.target.value;
        let validityArr=Object.assign({},this.state.isValid)
        orderReplica[field] = val;
        //validate all input
        const isValid=this.validateInp(val,field)
        validityArr[field]=isValid
        if(!isValid && this.state.touched ){
            event.target.classList.add(Inputclass.invalid)
        }else{
            event.target.classList.remove(Inputclass.invalid)
        }
        //setting final states
        this.setState({
            orderData: orderReplica,
            isValid:validityArr,
            touched:true
        })
    }
    render(){
        {if(!this.state.ordered){
            return(
                <div className={classes.ContactData}>
                    <h3>Enter your Personal Details:</h3>
                    <form >
                        <Input inptype="input" type="text" placeholder="Name" value={this.state.name} onChange={(event) =>this.getValues(event,"name")}  />
                        <Input inptype="input" type="email" placeholder="Email" value={this.state.email} onChange={(event) => this.getValues(event,"email")} />
                        <Input inptype="input" type="text" placeholder="Street" value={this.state.street} onChange={(event) => this.getValues(event,"street")}/>
                        <Input inptype="input" type="text" placeholder="Postal code" value={this.state.postalcode} onChange={(event) => this.getValues(event,"postalcode")} />
                        <Button btnType="Success" clicked={this.orderHandler} disabled={!(this.state.touched && this.allValid(this.state.isValid))}>ORDER</Button>
                    </form>
                </div>
                
            );
        } else{
            return(<Redirect to="/orders"></Redirect>)
        }}
    }
} 

const mapStateToProps=(state)=>{
    return{
        ing: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData)