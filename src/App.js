import React from 'react';
import './App.css';
import useStats from './utils/useStats';
import Stats from './components/Stats';
import CountrySelector from './components/CountrySelector';




function App() {
  return (
    <div >
      <h1 className="main">Corona Virus States World-wide and Country wise</h1>
      <h1 className="heading">Showing World Stats</h1>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}

export default App;
