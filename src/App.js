import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { About } from './components/About';
import { CurriculumVitae } from './components/CurriculumVitae';
import './App.css';

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
        {/* need to work on the not found logic */}
        {/* <Route><NotFound /></Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
