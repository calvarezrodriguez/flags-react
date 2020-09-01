import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from './wrapper'

const HeaderStyled = styled.div`
  background: var(--white);
  box-shadow: 0 2px 4px 0 rgb(0, 0, 0, 0.06);
  margin-bottom: 1em;
  h1 {
    font-size: 14px;
  }
  a {
    color: var(--dark);
    text-decoration: none;
  }
  .content {
    align-items: center;
    display: flex;
    height: 80px;
    justify-content: space-between;
  }
  .dark-mode {
    cursor: pointer;
    .moon {
      display: inline-flex;
      margin-right: 10px;
      transform: rotate(-25deg);
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`

const Header = ({ setDarkMode, darkMode }: any) => {
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {darkMode ? <i className="fas fa-moon"></i> : <i className="far fa-moon"></i>}
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
