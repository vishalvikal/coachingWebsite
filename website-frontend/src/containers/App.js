import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {configureStore} from '../store/'
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';
import Navbar from "./Navbar"
import jwtDecode from 'jwt-decode';
import {setAuthorizationToken, setCurrentUser} from '../store/actions/auth';
//import backgroundImage from '../images/patternImageWebsite.jpg'
import Footer from'./Footer'
const store = configureStore();
jwtDecode(localStorage.jwtToken)
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }
  catch{
    store.dispatch(setCurrentUser({}));
  }
  
}
console.log(localStorage.jwtToken);

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <Provider store={store}>
        <Router>
          <div className="background_color"></div>
          <Navbar></Navbar>
          <Main></Main>
          {/* <div className="background_image">
            <img src={backgroundImage}></img>
          </div> */}
        <Footer></Footer>
        </Router>
        </Provider>
    
       
 
    
    );
  }

  

}

export default App;
