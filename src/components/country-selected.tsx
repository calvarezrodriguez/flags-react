import React from 'react'
import styled from 'styled-components'

const CountrySelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .border {
    padding: 0.5em 1em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin-right: 10px;
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
  }
  .languages {
    span {
      &:after {
        content: ', ';
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 3em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3em;
    }
  }
`

const CountrySelected = ({ ...selectedCountry }: any) => {
  console.log(selectedCountry)
  const iso = require('iso-3166-1')
  return (
    <CountrySelectedStyled>
      <img src={selectedCountry.flag} alt="" />
      <div>
        <h2>{selectedCountry.name}</h2>
        <div className="grid">
          <div>
            <p>
              <strong>Native Name: </strong>
              {selectedCountry.nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {selectedCountry.population}
            </p>
            <p>
              <strong>Region: </strong>
              {selectedCountry.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {selectedCountry.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {selectedCountry.capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain: </strong>
              {selectedCountry.topLevelDomain}
            </p>
            <p>
              <strong>Currencies: </strong>
              {selectedCountry.currencies.map((currency: any) => {
                console.log(currency.name)
                return <span key={currency.name}>{currency.name}</span>
              })}
            </p>
            <p className="languages">
              <strong>Languages: </strong>
              {selectedCountry.languages.map((language: any) => {
                return <span>{language.name}</span>
              })}
            </p>
          </div>
        </div>
        <p className="borders">
          <strong>Borders Countries: </strong>
        </p>
        {selectedCountry.borders.map((border: any) => {
          return (
            <span key={border} className="border">
              {iso.whereAlpha3(border).country}
            </span>
          )
        })}
      </div>
    </CountrySelectedStyled>
  )
}

export default CountrySelected
