import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {configureStore} from '../store/'
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';
import Navbar from "./Navbar"
import backgroundImage from '../images/patternImageWebsite.jpg'
const store = configureStore();
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
          <div className="background_image">
            <img src={backgroundImage}></img>
          </div>
        </Router>
        </Provider>
    
       
 
    
    );
  }

  

}

export default App;
