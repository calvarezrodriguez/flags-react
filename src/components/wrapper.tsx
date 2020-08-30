import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 1rem;
`

const Wrapper = ({ children }: any) => {
  return <WrapperStyled>{children}</WrapperStyled>
}

export default Wrapper
