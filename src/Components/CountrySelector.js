import React, { useContext, useEffect } from 'react'
import { GlobalContext } from './GlobalState';

export const CountrySelector = () => {

    const globalState = useContext(GlobalContext)

    useEffect(() => {
        globalState.getCountries();
    }, [])

    const getData = (e) => {
        globalState.getDataFromCountry(e.target.value);
    }

    return (
        <div className="country-selector">
            <select onChange={getData} >
                <option value="Global">Global</option>
                {
                    globalState.countries.map(country => {
                        return <option value={country}>{country}</option>
                    })
                }
            </select>
        </div>
    )
}
