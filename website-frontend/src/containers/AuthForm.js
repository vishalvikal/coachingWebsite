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
          <input id="rollNo" type="text" placeholder="rollno"></input>
          <label htmlFor="password"> Password:</label>
          <input id="password" type="password" placeholder="password"></input>
          <button type="submit">LogIn</button>
        </form>
      </div>
    </section>)
  }
}


export default AuthForm