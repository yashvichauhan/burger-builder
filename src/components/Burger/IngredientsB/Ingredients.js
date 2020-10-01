import React,{Component} from 'react';

import classes from './Ingredients.css'

class Ingredients extends Component{
    render(){
        let ingredient=null;

        switch(this.props.type){
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>;
                break;
            case('alooticki'):
                ingredient = <div className={classes.Alooticki}></div>;
                break;
            case('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case('chicken'):
                ingredient = <div className={classes.Chicken}></div>;
                break;
            default:
                ingredient=null;
        }
        return(ingredient);
    }
}
export default Ingredients;