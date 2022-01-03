import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';
import DigimonList from '../digimon/DigimonList';
import DigimonDetail from '../digimon/DigimonDetail';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/digimons" component={DigimonList}/>
        <Route exact path="/digimons/:id" component={DigimonDetail}/>
      </Switch>
    </>
  );
}
