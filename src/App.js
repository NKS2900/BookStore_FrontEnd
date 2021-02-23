import React from 'react'; 
//import {Route, Router,Switch} from 'react-router-dom'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Signup from '../src/pages/Signup/Signup.jsx'
import Login from '../src/pages/Login/Login.jsx'
function App() {
    return (
      <div className="App">
          <Router>
            <Switch>
                <Route path="/login" component={ Login }/>
                <Route path="/signup" component={ Signup }/>
            </Switch>
          </Router>
      </div>
    );
  }
  
  export default App;
