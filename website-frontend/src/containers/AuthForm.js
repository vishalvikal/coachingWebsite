import React, {Component} from 'react';
import '../index.css';
import {connect} from 'react-redux';
class AuthForm extends Component{
  constructor(props){
    super(props)
    this.state={
      rollNo:'',
      password:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(e);
    console.log(this.state);
    this.props.signin('signin', {...this.state})
    this.setState({rollNo:'', password:''})
    e.target.reset();
  }
  componentDidMount(){
    // this.props.signin('signin', {})
    console.log(this.props);
    
  }
  render(){
   const {message} = this.props;
   const {rollNo, password} = this.state;
    
    return(<section className="authform-section">
      <div className="auth-form">
        <div className="auth-form__strip">
          Login
        </div>
        <form className="main-form"  onSubmit={this.handleSubmit}>
          <label htmlFor="rollNo"> RollNo:</label>
          <input name="rollNo" id="rollNo" style={
            message &&! rollNo ? {
              'border': "0.4px solid red"
            } : null
          } type="text" placeholder="rollno" onChange={e=>this.setState({[e.target.name]:e.target.value})}></input>
          <label htmlFor="password"> Password:</label>
          <input name="password" id="password"
            style={
              message && !password ? {
                'border': "0.4px solid red"
              } : null
            } type="password" placeholder="password" onChange={e => this.setState({ [e.target.name]: e.target.value })}></input>
          <button type="submit">LogIn</button>
        </form>
      </div>
    </section>)
  }
}


export default AuthForm