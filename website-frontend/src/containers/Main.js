import React, {Component} from 'react';
import {Switch, Route, withRouter}from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage'
import AuthForm from './AuthForm'
import {authuser} from '../store/actions/auth'
class Main extends Component{
  constructor(props){
    super(props);
  }
  render(){
    // console.log(this.props.authuser('sigin', {}));
    return(
      <Switch >
        <Route exact path="/" render={(props)=><Homepage></Homepage>}></Route>
        <Route exact path="/auth" render={(props)=><AuthForm {...props}
        signin = {this.props.authuser}
        message={this.props.errors.message}
        ></AuthForm>}></Route>
      </Switch>

     
    )
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
    ...state
  }
}
export default withRouter(connect(mapStateToProps, {authuser})(Main));