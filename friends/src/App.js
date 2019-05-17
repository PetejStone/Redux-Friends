import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import Friends from './components/Friends';

function App(props) {
  return (
    <div className="App">
      <Route  path="/login" render={(props) => <Login {...props} />} />
      <PrivateRoute  exact path="/friends" component={Friends}/>
    </div>
  );
}

export default App;
