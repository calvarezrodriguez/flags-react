import React from 'react'
import styled from 'styled-components'
import Wrapper from './wrapper'

const HeaderStyled = styled.div`
  background: var(--white);
  box-shadow: 0 2px 4px 0 rgb(0, 0, 0, 0.06);
  margin-bottom: 1em;
  h1 {
    font-size: 14px;
  }
  .content {
    align-items: center;
    display: flex;
    height: 80px;
    justify-content: space-between;
  }
  .dark-mode {
    .moon {
      transform: rotate(-25deg);
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`

const Header = () => {
  const handleClick = () => {}
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Where in the world?</h1>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                <i className="far fa-moon"></i>
                {/* <i className="fas fa-moon"></i> */}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
