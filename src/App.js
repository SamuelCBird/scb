import React, { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import './App.css';

function App() {
  let [filter, setFilter] = useState('scb');
  
  return (
    <div> 
      <Header setter={setFilter} activeFilter={filter} />
      <Content activeFilter={filter} />
      <Footer />
    </div>
  );
}

export default App;
