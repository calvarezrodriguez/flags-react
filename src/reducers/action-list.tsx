import React from 'react'
import styled from 'styled-components'
import { FilterByRegion } from '../components/filter'
import Search from '../components/search'
import Wrapper from '../components/wrapper'

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    margin-top: 2.5em;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 200px;
    }
  }
`

const ActionList = () => {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <span />
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  )
}

export default ActionList
