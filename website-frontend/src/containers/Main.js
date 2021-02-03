import React, {Component} from 'react';
import {Switch, Route, withRouter}from 'react-router-dom';
class Main extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="dash-section">
        <div className="main-dash">
          <div className="main-dash__strip">
            <h1>This will be the heading</h1>
          </div>
        </div>
      </section>
     
    )
  }
}

export default withRouter(Main);