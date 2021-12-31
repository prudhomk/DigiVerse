import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';
import DigimonList from '../digimon/DigimonList';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/digimons" component={DigimonList}/>
      </Switch>
    </>
  );
}
