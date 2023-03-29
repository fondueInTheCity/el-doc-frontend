/* eslint-disable react/no-unknown-property */
import { NavLink } from 'react-router-dom'
import AuthService from '../services/auth.service'
import styled from 'styled-components'
import colors from '../constants/colors'

const Header = () => {
  const isAuthenticated = AuthService.isAuthenticated()

  return (
    <Container>
      <img src='/images/Your sign.png' height='43px' />
      {isAuthenticated && (
        <NavigationContainer>
          <NavigationItem>
            <NavLink to='/profile'>Profile</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/'>Work Directory</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/signin'>Sign Out</NavLink>
          </NavigationItem>
        </NavigationContainer>
      )}
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightBlack};
`

const NavigationContainer = styled.ul`
  text-align: center;
  margin: 0;
`

const NavigationItem = styled.li`
  display: inline-block;
  padding: 0 7px;
  a {
    display: block;
    padding: 0.5em 1.5em;
    color: ${colors.black};
    border-bottom: 1px solid transparent;
    text-decoration: none;
    height: 16px;
    padding: 22px 0 21px;
    :visited {
      color: ${colors.black};
    }
    :hover {
      border-bottom-color: ${colors.black};
    }
    &.active {
      border-bottom-color: ${colors.black};
    }
  }
`
export default Header
