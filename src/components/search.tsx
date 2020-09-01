import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import Input from './input'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../models/state.model'

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .close {
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgb(0, 0, 0, 0.05);
    position: absolute;
    right: 1em;
    top: 1em;
  }
  .message {
    position: absolute;
    top: 2.5em;
    left: 2.5em;
  }
`

const Search = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const countryListByName = useSelector((state: IState) => state.countryListByName)

  const filterByName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: event.target.value,
    })
  }

  const clearInput = () => {
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: '',
    })
    setInputValue('')
  }

  return (
    <SearchStyled>
      {inputValue && <i className="fa fa-close close" onClick={clearInput}></i>}
      <Input placeholder="Search for a country..." value={inputValue} onChange={filterByName} />
      {inputValue !== '' && countryListByName.length === 0 && (
        <p className="message">
          <strong>{`${inputValue}`}</strong> No se encuentra en la lista
        </p>
      )}
    </SearchStyled>
  )
}

export default Search
