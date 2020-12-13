import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import './App.css';

const App = (match) => {
  return (
    <div> 
      <Header />
      <Switch>
        <Route exact path='/' component={Content} />
        <Route path='/music' component={Content} />
        <Route path='/photography' component={Content} />
        <Route path='/programming' component={Content} />
        <Route><NotFound /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
