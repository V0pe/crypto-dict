import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import Homepage from './Components/Pages/Homepage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
