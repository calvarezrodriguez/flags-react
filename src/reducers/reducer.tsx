import { ICountry } from '../models/country.model'

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
      const result = () => {
        let list
        state.filterByRegion !== '' ? (list = state.coutryFilteredByRegion) : (list = state.countryList)
        return action.payload === ''
          ? []
          : list.filter((country: ICountry) => country.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
      const countryListByName = result()
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

export default reducer
