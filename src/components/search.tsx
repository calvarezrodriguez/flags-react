import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import Input from './input'
import { useDispatch } from 'react-redux'

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .close {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgb(0, 0, 0, 0.05);
  }
`

const Search = () => {
  const dispatch = useDispatch()
  // ESTADO LOCAL QUE ACTUALIZA INPUT
  const [inputValue, setInputValue] = useState('')

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
    <SearchStyled>
      {inputValue && <i className="fa fa-close close" onClick={clearInput}></i>}
      <Input placeholder="Search for a country..." value={inputValue} onChange={filterByName} />
    </SearchStyled>
  )
}

export default Search
