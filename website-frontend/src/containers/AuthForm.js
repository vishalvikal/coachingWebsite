import React, {Component} from 'react';
import '../index.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
class AuthForm extends Component{
  constructor(props){
    super(props)
    this.state={
      user:{email:'',
      password:'', 
      username:''},
      confirmPassword:'',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    console.log(this.props.user);
    e.preventDefault();
    this.props.authUser(this.props.signin?"signin":"signup", {...this.state.user}).then(()=>{
      this.props.history.push("/")
    }).catch(()=>{
      return;
    })
    this.setState({user:{username:'', email:'', password:''}})
    e.target.reset();
  }
  render(){
   const {message, heading, buttonValue, signup} = this.props;
   
   const {email, password, username} = this.state.user;
   const {confirmPassword} = this.state;
    return(<section className="authform-section">
      {message && (<div className="message-section">{message}</div>)}
      <div className="auth-form">
        <div className="auth-form__strip">
          {heading}
        </div>
        <form className="main-form"  onSubmit={this.handleSubmit}>
          {signup&&(<div>
            <label htmlFor="username">Username:</label>
            <input
              style={
                message && !username ? {
                  'border': "0.4px solid red"
                } : null
              }

              id="username" placeholder="username" name="username" onChange={(e) => this.setState((prevState)=>{
                let user ={
                  ...prevState.user,
                  [e.target.name]:e.target.value
                  
                }
                 return {user}
              })}></input>
          </div>)}
          
          <label htmlFor="email"> Email:</label>
          <input name="email" id="email" style={
            message &&! email ? {
              'border': "0.4px solid red"
            } : null
          } type="email" placeholder="email" onChange={(e) => this.setState((prevState) => {
            let user = {
              ...prevState.user,
              [e.target.name]: e.target.value

            }
            return { user }
          })}></input>
          <label htmlFor="password"> Password:</label>
          <input name="password" id="password"
            style={
              message && !password ? {
                'border': "0.4px solid red"
              } : null
            } type="password" placeholder="password" onChange={(e) => this.setState((prevState) => {
              let user = {
                ...prevState.user,
                [e.target.name]: e.target.value

              }
              return { user }
            })}></input>
          {signup && (<div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input name="confirmPassword" id="password"
              style={
                message && !password ? {
                  'border': "0.4px solid red"
                } : null
              } type="text" placeholder="retype Password" onChange={e => this.setState({ [e.target.name]: e.target.value })}></input>
          </div>)}
          <button disabled={password && confirmPassword && password === confirmPassword?false:true } type="submit">{buttonValue}</button>
        </form>
      </div>
    </section>)
  }
}


export default withRouter(AuthForm)