import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import slugify from 'slugify'
import styled from 'styled-components'
import { ICountry } from '../models/country.model'
import { IState } from '../models/state.model'
import CountrySelected from './country-selected'
import Wrapper from './wrapper'

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    padding: 0.7em 2.2em;
    border-radius: 5px;
    border: none;
    margin-top: 0.5em;
    color: var(--black);
    cursor: pointer;
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`

const CountryPage = ({ match, history }: any) => {
  let selectedCountry = useSelector((state: IState) =>
    state.countryList.find((country: ICountry) => slugify(country.name, { lower: true }) === match.params.id)
  )
  const [country, setCountry] = useState(selectedCountry)
  useEffect(() => {
    if (!selectedCountry) {
      fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
        .then((response: any) => {
          return response.json()
        })
        .then((data: any) => {
          setCountry(data[0])
        })
    }
  }, [selectedCountry, match.params.id])

  const handleClick = () => {
    history.goBack()
  }

  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left"></i> Back
        </button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  )
}

export default CountryPage
