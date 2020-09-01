import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  margin: auto;
  max-width: 1312px;
  padding: 0 1rem;
`

const Wrapper = ({ children }: any) => {
  return <WrapperStyled>{children}</WrapperStyled>
}

export default Wrapper
