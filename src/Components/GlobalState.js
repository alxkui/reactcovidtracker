import React, { createContext, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    countries: [],
    confirmed: null,
    recovered: null,
    deaths: null,
    loading: false,
    errors: []
}

// Context
export const GlobalContext = createContext(initialState);

// Reducer
const reducer = (state, action) => {
    switch(action.type) {
        case "GET_CONFIRMED":
            return {...state, confirmed: action.payload}
        case "GET_RECOVERED":
            return {...state, recovered: action.payload}
        case "GET_DEATHS":
            return {...state, deaths: action.payload}
        case "GET_COUNTRIES":
            return {...state, countries: action.payload}
        default:
            return state;
    }
}

// Provider Components
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const loadCountries = async () => {
        try {

            let countries = [];
            // Fetch country info from api
            await axios.get('https://covid19.mathdro.id/api/countries')
            .then(res => {
                res.data.countries.forEach(country => {
                    countries.push(country.name);
                })
            })
            .finally(() => {
                dispatch({
                    type: "GET_COUNTRIES",
                    payload: countries
                })
            });


         
        } catch(err) {
            console.log(err)
        }

    }

    const loadStatsByCountry = async (country) => {

        try {

            if(country === "Global") {

                await axios.get('https://covid19.mathdro.id/api/')
                .then(res => {
                    dispatch({
                        type: "GET_CONFIRMED",
                        payload: res.data.confirmed.value
                    });
    
                    dispatch({
                        type: "GET_RECOVERED",
                        payload: res.data.recovered.value
                    });
    
                    dispatch({
                        type: "GET_DEATHS",
                        payload: res.data.deaths.value
                    });
                });

            }
            else {

                await axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
                .then(res => {
                    dispatch({
                        type: "GET_CONFIRMED",
                        payload: res.data.confirmed.value
                    });
    
                    dispatch({
                        type: "GET_RECOVERED",
                        payload: res.data.recovered.value
                    });
    
                    dispatch({
                        type: "GET_DEATHS",
                        payload: res.data.deaths.value
                    });
                });

            }

        } catch(err) {
            console.log(err);
        }

    }

    return (
        <GlobalContext.Provider value={{
            getCountries: loadCountries,
            getDataFromCountry: loadStatsByCountry,
            countries: state.countries,
            confirmed: state.confirmed,
            recovered: state.recovered,
            deaths: state.deaths
        }}>
            { children }
        </GlobalContext.Provider>
    )
}
