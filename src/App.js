import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { About } from './components/About';
import './App.css';
import './styles/global.css';

import ContentWithDB from './components/ContentWithDB';

const App = (match) => {
  return (
    <div> 
      <Header />
        <Switch>
            <Route exact path='/' component={Content} />
            <Route path='/music' component={Content} />
            <Route path='/photography' component={Content} />
            <Route path='/programming' component={Content} />
            <Route path='/about' component={About} />
            <Route path='/firestore' component={ContentWithDB} />
            {/* <Route path='/curriculumvitae' component={CurriculumVitae} /> */}
            <Route component={NotFound} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
