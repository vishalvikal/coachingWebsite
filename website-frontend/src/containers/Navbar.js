import React , {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../store/actions/auth'
class Navbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    const {user} = this.props;
    return(<section className="main-header">
  
        <div className="main-header__heading">
          <h1 className="main-header__brand">Name</h1>
        </div>
        <div className="main-header__links">
          <Link className="main-header__link" to="/"> Home</Link>
        {user.isAuthenticated ? <Link onClick={this.props.logout} className="main-header__link" to="/auth">LogOut</Link> : <Link className="main-header__link" to="/auth">LogIn</Link>}
       
        </div>
  
    </section>)
  }
}

function mapStateToProps(state){
  return{
    user:state.currentUser
  }
}
export default withRouter(connect(mapStateToProps, {logout})(Navbar));