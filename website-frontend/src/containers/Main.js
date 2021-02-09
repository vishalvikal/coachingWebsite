import React, {Component} from 'react';
import {Switch, Route, withRouter}from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage'
import AuthForm from './AuthForm'
import {authuser} from '../store/actions/auth'
const Main = props =>{
    const {authuser, errors} = props
    // console.log(this.props.authuser('sigin', {}));
    return(
      <Switch >
        <Route exact path="/" render={(props)=><Homepage {...props}></Homepage>}></Route>
        <Route exact path="/login" render={(props)=><AuthForm {...props}
        heading="Login"
        buttonValue="LogIn"
        authUser = {authuser}
        signin='signin'
       
        message={errors.message}
        ></AuthForm>}></Route>
        <Route exact path="/signup"
         render={(props)=><AuthForm 
         {...props}
         heading="Signup"
         buttonValue="SignUp"
         authUser={authuser}
         signup='signup'
         message={errors.message}
         ></AuthForm>}></Route>
      </Switch>

     
    )
  }



function mapStateToProps(state) {
  console.log(state);
  return {
    ...state
  }
}
export default withRouter(connect(mapStateToProps, {authuser})(Main));