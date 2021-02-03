import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
class Navbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<section className="main-header">
  
        <div className="main-header__heading">
          <h1 className="main-header__brand">Name</h1>
        </div>
        <div className="main-header__links">
         
            <a className="main-header__link">Home</a>
            <a className="main-header__link">LogIn</a>
       
        </div>
  
    </section>)
  }
}
export default withRouter(connect(null, null)(Navbar))