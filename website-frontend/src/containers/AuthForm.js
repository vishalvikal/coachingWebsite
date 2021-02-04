import React, {Component} from 'react';
import '../index.css';
import {connect} from 'react-redux';
class AuthForm extends Component{

  render(){
   
    return(<section className="authform-section">
      <div className="auth-form">
        <div className="auth-form__strip">
          Login
        </div>
        <form className="main-form">
          <label htmlFor="rollNo"> RollNo:</label>
          <input id="rollNo" type="text"></input>
          <label htmlFor="password"> password:</label>
          <input id="password" type="password"></input>
          <button type="submit">LogIn</button>
        </form>
      </div>
    </section>)
  }
}


export default AuthForm