import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { About } from './components/About';
import { CurriculumVitae } from './components/CurriculumVitae';
import './App.css';
import './styles/global.css';

const App = (match) => {
  return (
    <div> 
      <Header />
      <Switch>
        <LastLocationProvider>
          <Route exact path='/' component={Content} />
          <Route path='/music' component={Content} />
          <Route path='/photography' component={Content} />
          <Route path='/programming' component={Content} />
          <Route path='/about' component={About} />
          <Route path='/curriculumvitae' component={CurriculumVitae} />
        </LastLocationProvider>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
