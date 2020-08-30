import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgb(0, 0, 0, 0.05);
  display: inline-flex;
  padding: 0 2rem;
  flex: 1;
  i {
    color: #c4c4c4;
    margin-right: 1em;
  }
  input {
    border: none;
    flex: 1;
    font-size: 0.7em;
    height: 48px;
    line-height: 48px;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`

const Input = ({ ...props }) => {
  return (
    <InputStyled>
      <i className="fa fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  )
}

export default Input
