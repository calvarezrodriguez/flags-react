import React from "react";
import styled from "styled-components";
import { ICountry } from "../models/country.model";

const CountryStyled = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgb(0, 0, 0, 0.03);
  margin: 1em;
  overflow: hidden;
  text-align: left;
  width: 264px;
  img {
    height: 160px;
    object-fit: cover;
    width: 100%;
  }
  .details {
    padding: 1.5em;
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
`;

const Country = (props: ICountry) => {
  return (
    <CountryStyled>
      <img loading="lazy" src={props.flag} alt="flag" />
      <div className="details">
        <h2>{props.name}</h2>
        <p>
          <strong>Population: </strong>
          {props.population}
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
  );
};

export default Country;
