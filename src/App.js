import React, {useContext, useEffect} from 'react';
import { CountrySelector } from './Components/CountrySelector';
import { GlobalProvider } from './Components/GlobalState';
import { StatDisplay } from './Components/StatDisplay';
import './App.css';

function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <h1 className="title">COVID-TRACKER</h1>
        <CountrySelector />
        <StatDisplay />
      </div>
    </GlobalProvider>
  );
}

export default App;
