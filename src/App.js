import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import Quiz2 from './Components/Quiz2';
import Quiz3 from './Components/Quiz3';
import Quiz1 from './Components/Quiz1';

//basename={process.env.PUBLIC_URL}
function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/quiz1'>
          <Quiz1 />
        </Route>
        <Route path='/quiz2'>
          <Quiz2 />
        </Route>
        <Route path='/quiz3'>
          <Quiz3 />
        </Route>
        <Route path='/' render={props => <Home {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
