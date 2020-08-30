import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";
import { ICountry } from "../models/country.model";

/* eslint-disable */

const CountryListStyled = styled.div`
  background: var(--background);
  border: 1px solid red;
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  padding: 4em 2em;
`;

interface IState {
  countryList: [
    {
      capital: string;
      flag: string;
      name: string;
      population: number;
      region: string;
    }
  ];
}

const CountryList = () => {
  const dispatch = useDispatch(); //UTILIZADO PARA CREAR ACCIONES
  const countryList = useSelector((state: IState) => state.countryList);
  console.log("El estado total de mi app es", countryList);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          //ACCION REDUX
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        console.log(list.length);
      })
      .catch(() => {
        console.log("Hubo un error");
      });
  }, [dispatch]);
  return (
    <CountryListStyled>
      {countryList.map(({ capital, flag, name, population, region }) => {
        return (
          <Country
            capital={capital}
            flag={flag}
            key={name}
            name={name}
            population={population}
            region={region}
          />
        );
      })}
    </CountryListStyled>
  );
};

export default CountryList;
