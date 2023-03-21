import { NavLink } from 'react-router-dom'
import AuthService from '../services/auth.service'
import styled from 'styled-components'
import colors from '../constants/colors'

const Header = () => {
  const isAuthenticated = AuthService.isAuthenticated()

  return (
    <header className='main-header'>
      <Container>
        <h1 className='mh-Slogo'>
          <ImageContainer
            src='http://flexbox.ninja/assets/images/logo.svg'
            width='170'
            height='95'
            alt='Flexbox.ninja'
          />
        </h1>
        {isAuthenticated && (
          <NavigationContainer className='main-nav'>
            <ul className='main-nav-list'>
              <li>
                <NavLink to='/profile'>Profile</NavLink>
              </li>
              <li>
                <NavLink to='/'>Work Directory</NavLink>
              </li>
              <li>
                <SignOutButton>Sign Out</SignOutButton>
              </li>
            </ul>
          </NavigationContainer>
        )}
      </Container>
    </header>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ImageContainer = styled.img`
  max-width: 100%;
  height: auto;
`

const NavigationContainer = styled.nav`
  ul {
    margin: 1em 0 0.5em;
    text-align: center;
  }
  li {
    display: inline;
  }
  a {
    display: inline-block;
    padding: 0.5em 1.5em;
    color: ${colors.yellow};
    :visited {
      color: ${colors.yellow};
    }
  }
`

const SignOutButton = styled.button`
  color: ${colors.yellow};
  border-radius: 45px;
  border-color: ${colors.yellow};
  background-color: ${colors.backgroundColor};
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    background: ${colors.yellow};
    color: ${colors.backgroundColor};
  }
`

export default Header
