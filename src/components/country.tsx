import React from 'react'
import styled from 'styled-components'
import { ICountry } from '../models/country.model'
import { useHistory } from 'react-router-dom'
import slugify from 'slugify'

const CountryStyled = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgb(0, 0, 0, 0.03);
  cursor: pointer;
  margin-bottom: 1em;
  text-align: left;
  background: var(--white);
  &:hover .details {
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--black);
    border-top: none;
  }
  img {
    border-radius: 5px 5px 0 0;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    width: 100%;
  }
  .details {
    border: 1px solid transparent;
    border-top: none;
    padding: 1.5em;
    transition: 0.3s border;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 1rem;
    margin: 0;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`

const Country = (props: ICountry) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/country/${slugify(props.name, { lower: true })}`)
  }
  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={props.flag} alt="flag" />
      <div className="details">
        <h2>{props.name}</h2>
        <p>
          <strong>Population: </strong>
          {props.population.toLocaleString('de')}
        </p>
        <p>
          <strong>Region: </strong>
          {props.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {props.capital}
        </p>
      </div>
    </CountryStyled>
  )
}

export default Country
