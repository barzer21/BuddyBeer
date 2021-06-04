import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import BeerList from './containers/BeerList';
import BeerItem from './containers/BeerItem';
import Favorite from './containers/Favorite';
import test from './containers/test';

function App() {
  return (
      <div className="App">
          <nav>
              <NavLink to={"/"}> Browse Beers </NavLink>
              <p> BeerBuddy</p>
              <NavLink to={"/Favorite"}> Favorite Beers </NavLink>
          </nav>
          <Switch>
              <Route path={"/"} exact component={BeerList} />
              <Route path={"/beer/:beer"} exact component={BeerItem} />
              <Route path={"/Favorite"} exact component={Favorite} />
              
          </Switch>

    </div>
  );
}

export default App;
