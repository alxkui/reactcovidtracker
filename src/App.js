import React, {useContext, useEffect} from 'react';
import { CountrySelector } from './Components/CountrySelector';
import { GlobalProvider } from './Components/GlobalState';
import { StatDisplay } from './Components/StatDisplay';
import Graph from './Components/Graph';
import './App.css';

function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <h1 className="title">COVID-TRACKER</h1>
        <CountrySelector />
        <StatDisplay />
        <Graph />
      </div>
      <p style={{textAlign: 'center'}}>Alex Kovacs &copy; 2020 using <a href="https://covid19.mathdro.id/api">mathdro.id</a> API</p>
    </GlobalProvider>
  );
}

export default App;
