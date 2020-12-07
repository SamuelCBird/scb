import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import './App.css';

function App() {
  return (
    <div> 
      <Header />
      <Switch>
        <Route exact path='/' render={Content} />
        <Route exact path='/music' render={Content} />
        <Route exact path='/photography' render={Content} />
        <Route exact path='/programming' render={Content} />
        <Route render={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
