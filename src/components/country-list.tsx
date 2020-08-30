import React, { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from './country'
import { useSelector, useDispatch } from 'react-redux'
import { IState } from '../models/state.model'

const CountryListStyled = styled.div`
  background: var(--background);
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  padding: 4em 2em;
`

const CountryList = () => {
  const dispatch = useDispatch()
  // ESTADO LOCAL QUE ACTUALIZA INPUT
  const [inputValue, setInputValue] = useState('')
  // OBTENGO LISTA ORDENADA EN CASO DE QUE SE ESTE UTILIZANDO EL FILTRO
  const countryList = useSelector((state: IState) => {
    if (state.filterByRegion !== '') {
      return state.coutryFilteredByRegion
    }
    return state.countryList
  })
  // OBTENGO LISTA DE PAISES BUSCADOS POR NOMBRE DEL ESTADO GENERAL
  const countryListByName = useSelector((state: IState) => state.countryListByName)

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

  // DESPACHA ACCION CUANDO SE REGISTRAN CAMBIOS EN EL INPUT
  const readAPI = (list: Response) => {
    dispatch({
      type: 'SET_COUNTRY_LIST',
      payload: list,
    })
  }

  // DESPACHA ACCION CUANDO SE REGISTRAN CAMBIOS EN EL INPUT
  const filterByName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: event.target.value,
    })
  }

  // DESPACHA ACCION QUE LIMPIA INPUT
  const clearInput = () => {
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: '',
    })
    setInputValue('')
  }

  return (
    <CountryListStyled>
      <input type="text" value={inputValue} onChange={filterByName} />

      {inputValue && <button onClick={clearInput}>X</button>}

      {/* SI LA LISTA DE PAISES ESTA VACÍA, SE MUESTRA BUSQUEDA Y SE INDICA QUE NO SE HA ENCONTRADO */}
      {countryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue}</strong> Not found in countries
        </p>
      )}

      {/* SI NO SE HA BUSCADO NADA, SE MUESTRA COUNTRYLIST, SINO SE MUESTRA BUSQUEDA POR NOMBRE */}
      {(countryListByName.length > 0 ? countryListByName : countryList).map(
        ({ name, flag, population, capital, region }) => {
          return (
            <Country capital={capital} flag={flag} key={name} name={name} population={population} region={region} />
          )
        }
      )}
    </CountryListStyled>
  )
}

export default CountryList
