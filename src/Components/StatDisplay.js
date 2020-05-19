import React, { useContext, useEffect } from 'react'
import { GlobalContext } from './GlobalState';

export const StatDisplay = () => {

    const globalState = useContext(GlobalContext);

    // Initialise the numbers
    useEffect(() => {
        globalState.getDataFromCountry("Global");
    }, [])

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div class="stat-display">
            {globalState.confirmed && globalState.recovered && globalState.deaths ? 
            <React.Fragment>
                <div class="stat-display-item"><h2>Confirmed: <span>{ formatNumber(globalState.confirmed) }</span></h2></div>
                <div class="stat-display-item"><h2>Recovered: <span>{ formatNumber(globalState.recovered) }</span></h2></div>
                <div class="stat-display-item"><h2>Deaths: <span>{ formatNumber(globalState.deaths) }</span></h2></div>
            </React.Fragment>
            : null}
        </div>
    )
}
