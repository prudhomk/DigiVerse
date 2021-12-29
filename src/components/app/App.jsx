import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import DigimonList from '../digimon/DigimonList';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/digimon" component={DigimonList}/>
      </Switch>
    </>
  );
}
