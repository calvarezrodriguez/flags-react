import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../models/state.model'
import styled from 'styled-components'

const FilterStyled = styled.select`
  background: var(--white);
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 9px 0 rgb(0, 0, 0, 0.05);
  color: var(--black);
  outline: 0;
  padding: 1.3em;
`

// FUNCION QUE DEFINE EL CUERPO DE LA ACCION
const filterByRegionAction = (regionSelected: String) => {
  return {
    type: 'FILTER_BY_REGION',
    payload: { regionSelected },
  }
}

export const FilterByRegion = () => {
  // DESPACAHA ACCIONES
  const dispatch = useDispatch()
  // RECUPERA ESTADO ACTUAL DE LA ACCION
  const filterByRegion = useSelector((state: IState) => state.filterByRegion)
  // RECIBE ELEMENTO DESDE SELECT
  const onRegionChange = (selectEvent: ChangeEvent<HTMLSelectElement>) => {
    const value = selectEvent.target.value
    // CONSTRUYO ACCION
    dispatch(filterByRegionAction(value))
  }
  return (
    // CAPTA CAMBIO Y ENVIA A FUNCION
    <FilterStyled onChange={onRegionChange} value={filterByRegion}>
      <option value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </FilterStyled>
  )
}
