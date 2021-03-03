import React, {Component} from 'react'
import {connect} from 'react-redux'

import classes from './auth.css'
import Button from '../../components/UI/Button/button'
import Input from '../../components/UI/Input/input'
import Inputclass from '../../components/UI/Input/input.css'
import * as reducerActions from '../../Store/reducerActions'
import * as reducerType from '../../Store/reducerType'

//APIKEY = AIzaSyC45vp60SMhEsiZth4PYQSVjZpuzvGWuUM

class Auth extends Component{
    state={
        login:{
            email:null,
            password:null
        },
        loading:false,
        isValid:[],
        touched:false
    }
    //final function
    authHandler= async (event,authState)=>{
        event.preventDefault()
        try{
            await this.props.onAuthState(authState)
        }catch(error){
            console.log(error)
        }
        this.props.onAuth(this.state.login.email,this.state.login.password,this.props.authSt);
        this.props.history.push('/build');
    }
    //auxiliary
    allValid=(isValid)=>{
        for(var field in isValid)
            if(!isValid[field]) return false;
        return true;
    }
    validateInp = (val,field)=>{
          let isValid=true;
          if(field==='email'){
              let regex = /^[A-Za-z0-9._]+@[A-Za-z0-9_.]+\.[A-Za-z0-9]+$/;
              if(!regex.test(val)){
                  console.log(regex.test(val))
                  return false
              }   
          }
          if(field==='password'){
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            if(!regex.test(val)){
                console.log(regex.test(val))
                return false
                }   
            }
          isValid= !(val.trim()==='')
          return isValid
    }
    getValues=(event,field)=>{
          let loginReplica=this.state.login;
          let val = event.target.value;
          let validityArr=Object.assign({},this.state.isValid)
          loginReplica[field] = val;
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
              login: loginReplica,
              isValid:validityArr,
              touched:true
          })
    }
    render(){
        return(
            <div className={classes.auth}>
                <h3>Login</h3>
                <form >
                    <Input inptype="input" type="email" placeholder="Email" value={this.state.email} onChange={(event) => this.getValues(event,"email")} />
                    <Input inptype="input" type="password" placeholder="Password" value={this.state.name} onChange={(event) =>this.getValues(event,"password")}  />
                    <Button btnType="Success" clicked={(event) => this.authHandler(event,"login")} disabled={!(this.state.touched && this.allValid(this.state.isValid))}>LOGIN</Button>
                    <span><strong>OR</strong></span>
                    <Button btnType="Success" clicked={(event) => this.authHandler(event,"signup")} >SIGNUP</Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        authSt: state.authState,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAuth:(email,password,authState)=>(dispatch(reducerActions.auth(email,password,authState))),
        onAuthState:(authState)=>(dispatch({type: reducerType.INIT_AUTHSTATE,authSt:authState}))
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Auth);