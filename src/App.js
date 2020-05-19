import React, {useContext, useEffect} from 'react';
import { CountrySelector } from './Components/CountrySelector';
import { GlobalProvider } from './Components/GlobalState';
import { StatDisplay } from './Components/StatDisplay';
import './App.css';

function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <StatDisplay />
        <CountrySelector />
      </div>
    </GlobalProvider>
  );
}

export default App;
