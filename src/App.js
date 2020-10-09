import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={props=> <Home {...props} />}>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
