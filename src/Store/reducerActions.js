import * as reducerTypes from './reducerType'
import axios from '../axiosInstance'

import fire from '../config/firebaseFile' 

export const authStart=()=>{
    return{
        type:reducerTypes.AUTH_START
    }
}
export const authSuccess=(userData)=>{
    return{
        type:reducerTypes.AUTH_SUCCESS,
        userData:userData
    }
}
export const authFail=(error)=>{
    return{
        type:reducerTypes.AUTH_FAIL,
        error:error
    }
}
export const auth = (email,password,authState)=>{
    return (dispatch)=>{
        dispatch(authStart());
        //final signup
        if(authState==='signup'){
            fire.auth().createUserWithEmailAndPassword(email,password)        
            .then((user)=>{
                dispatch(authSuccess(user))
            })
            .catch((error)=>{
                dispatch(authFail(error))
            })    
        }
        if(authState==='login'){
            fire.auth().signInWithEmailAndPassword(email,password)        
            .then((user)=>{
                dispatch(authSuccess(user))
            })
            .catch((error)=>{
                dispatch(authFail(error))
            })
        }else{
            console.log("Authstate not working: "+authState)
        }
    }
}

