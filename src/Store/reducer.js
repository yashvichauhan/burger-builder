import * as reducerType from './reducerType'; 

const initialState={
    ingredients:{
        salad:0,
        alooticki:0,
        chicken:0,
        cheese:0
    },
    totalPrice:14,
    user:null,
    authState:null,
}
const INGREDIENT_PRICES = {
    alooticki: 42,
    salad: 20,
    chicken: 48,
    cheese: 30
};

const reducer =(state= initialState,action)=>{
    switch(action.type){
        case (reducerType.ADD_INGREDIENT):
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName] : state.ingredients[action.ingName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingName]
            }
        case (reducerType.RM_INGREDIENT):
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName] : state.ingredients[action.ingName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingName]
            }
        case (reducerType.INIT_USER):
            return{
                ...state,
                user: action.userData
            }
        case (reducerType.INIT_AUTHSTATE):
            return{
                ...state,
                authState: action.authSt
            }
        case (reducerType.AUTH_SUCCESS):
            return{
                ...state,
                user:action.userData
            }
        default:
            return state
    }
};

export default reducer;