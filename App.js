import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loginheader from './LoginHeader';
import Login from'./Login.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = '/login'>
            <Loginheader />
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
