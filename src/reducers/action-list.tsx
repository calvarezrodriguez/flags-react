import React from 'react'
import styled from 'styled-components'
import Search from '../components/search'
import { Region as FilterByRegion } from '../components/region'
import Wrapper from '../components/wrapper'

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
`

const ActionList = () => {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  )
}

export default ActionList
