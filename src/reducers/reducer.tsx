import { ICountry } from '../models/country.model'

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload }
    }

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

    case 'FILTER_BY_REGION': {
      const { regionSelected } = action.payload
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
