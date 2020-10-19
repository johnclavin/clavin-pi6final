import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import "./App.css";

import Navigation from "./Navigation";
import Homepage from "./Homepage";
import Painting1 from "./Painting1";
import Painting2 from "./Painting2";
import Painting3 from "./Painting3";
import Blink from "./Blink";

class App extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
    return(
      <div className="App">
        <Router>
          <Navigation />
          <div className="Container">
            <Switch>
              <Route path="/Homepage" component={Homepage} />
              <Route path="/Painting1" component={Painting1} />
              <Route path="/Painting2" component={Painting2} />
              <Route path="/Painting3" component={Painting3} />
              <Route path="/Blink" component={Blink} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}













export default App;
