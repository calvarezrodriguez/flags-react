import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from './country'
import { useSelector, useDispatch } from 'react-redux'
import { IState } from '../models/state.model'
import Wrapper from './wrapper'

const CountryListStyled = styled.div`
  background: var(--background);
  display: grid;
  grid-auto-flow: columns;
  grid-column-gap: 75px;
  grid-row-gap: 2.3em;
  grid-template-columns: repeat(auto-fill, minMax(0, 270px));
  justify-content: center;
  justify-items: space-between;
  padding: 3em 0;
`

const CountryList = () => {
  const dispatch = useDispatch()
  // OBTENGO LISTA DE PAISES BUSCADOS POR NOMBRE DEL ESTADO GENERAL
  const countryListByName = useSelector((state: IState) => state.countryListByName)
  // OBTENGO LISTA FILTRADA POR NOMBRE O REGION
  const countryList = useSelector((state: IState) => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) return state.coutryFilteredByRegion

    if (countryListByName.length > 0) return countryListByName

    return state.countryList
  })

  // DESPACHA ACCION CUANDO SE REGISTRAN CAMBIOS EN EL INPUT
  const readAPI = (list: Response) => {
    dispatch({
      type: 'SET_COUNTRY_LIST',
      payload: list,
    })
  }

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
        return response.json()
      })
      .then(list => {
        // ENVIA LECTURA AL ESTADO PRINCIPAL
        readAPI(list)
      })
      .catch(() => {
        console.log('Hubo algún error en la lectura de la api')
      })
  })

  return (
    <Wrapper>
      <CountryListStyled>
        {/* DESPLIEGA LA LISTA DE PAISES */}
        {countryList.map(({ name, flag, population, capital, region }) => {
          return (
            <Country capital={capital} flag={flag} key={name} name={name} population={population} region={region} />
          )
        })}
      </CountryListStyled>
    </Wrapper>
  )
}

export default CountryList
