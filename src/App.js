import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import daffodil from "./images/daffodil.png";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/' render={props => <Home {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
