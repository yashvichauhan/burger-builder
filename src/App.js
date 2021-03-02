import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'

import Layout from './components/layouts/layout';
import Builder from './containers/burgerBuild/builder';
import Checkout from '../src/containers/Checkout/checkout'
import Orders from '../src/containers/Orders/orders'
import Auth from './containers/Auth/auth'
import fire from './config/firebaseFile'

class App extends Component {
  componentDidMount(){
    this.authListener()
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
    //
    })
  }
  //render
  render(){
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/" exact component={Builder}></Route> 
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
      user: state.user,
  }
}

export default connect(mapStateToProps)(App);
