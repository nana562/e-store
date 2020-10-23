import React from 'react';
import './App.css';
import Login from './Login.js';
import './Login.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  
  return (
    <div className=" App container">
      <Router>
        <Switch>
         <Route exact path="/" component={Navbar}/>
        
         <Route exact path="/login" component={Login}/>
        </Switch>
      </Router>     
      </div>
  );
}

export default App;
