import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../models/state.model'

// FUNCION QUE DEFINE EL CUERPO DE LA ACCION
const filterByRegionAction = (regionSelected: String) => {
  return {
    type: 'FILTER_BY_REGION',
    payload: { regionSelected },
  }
}

const Region = () => {
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
    <select onChange={onRegionChange} value={filterByRegion}>
      <option value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default Region
