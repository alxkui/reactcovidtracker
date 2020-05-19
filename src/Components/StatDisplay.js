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
                <div class="stat-display-item confirmed"><h2>Confirmed: <br /> <span>{ formatNumber(globalState.confirmed) }</span></h2></div>
                <div class="stat-display-item recovered"><h2>Recovered: <br /> <span>{ formatNumber(globalState.recovered) }</span></h2></div>
                <div class="stat-display-item deaths"><h2>Deaths: <br /> <span>{ formatNumber(globalState.deaths) }</span></h2></div>
            </React.Fragment>
            : null}
        </div>
    )
}
