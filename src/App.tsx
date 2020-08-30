import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css'
import CountryList from './components/country-list'
import Region from './components/region'
import { ICountry } from './models/country.model'

// ESTADO INICIAL
const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}

// EJECUTA ACCION SOBRE EL ESTADO
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    // ALMACENA TODOS LOS PAISES EN COUNTRYLIST DETNRO DEL STATE
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload }
    }

    // ALMACENA TODOS LOS PAISES POR NOMBRE EN COUNTRYLISTBYNAME DETNRO DEL STATE
    case 'SET_COUNTRY_BY_NAME': {
      // FILTRO LISTA DE PAISES QUE HAGAN MATCH CON CARACTERES
      const countryListByName = state.countryList.filter((country: ICountry) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      )
      return { ...state, countryListByName }
    }

    // ALMACENA TODOS LOS PAISES POR REGION EN COUNTRYFILTEREDBYREGION DENTRO DEL STATE
    case 'FILTER_BY_REGION': {
      const { regionSelected } = action.payload
      // FILTRO PAISES POR REGION
      const coutryFilteredByRegion = state.countryList.filter((country: ICountry) => country.region === regionSelected)
      return { ...state, coutryFilteredByRegion, filterByRegion: regionSelected }
    }

    // CASO POR DEFECTO
    default: {
      return state
    }
  }
}

const store = createStore(reducer)

function App() {
  return (
    //PROVIDER RECIBE STATE Y ALMACENA
    <Provider store={store}>
      <div className="App">
        <Region />
        <CountryList />
      </div>
    </Provider>
  )
}

export default App
