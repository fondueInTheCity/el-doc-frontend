import { NavLink } from 'react-router-dom'
import authApi from '../api/AuthApi'
import styled from 'styled-components'
import colors from '../constants/colors'
import { store } from '../store'
import { logout } from '../store/auth.slice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const isAuthenticated = authApi.isAuthenticated()

  const navigate = useNavigate()

  const redirectToSignIn = () => {
    store.dispatch(logout()).then(() => navigate('/signin'))
  }

  return (
    <Container>
      <img src='/images/Your sign.png' height='43px' />
      {isAuthenticated && (
        <NavigationContainer>
          <NavigationItem>
            <CustomNavLink to='/profile'>Profile</CustomNavLink>
          </NavigationItem>
          <NavigationItem>
            <CustomNavLink to='/'>Work Directory</CustomNavLink>
          </NavigationItem>
          <NavigationItem>
            <CustomNavLink to='/signin' onClick={redirectToSignIn}>
              Sign Out
            </CustomNavLink>
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
`

const CustomNavLink = styled(NavLink)`
  display: block;
  padding: 0.5em 1.5em;
  color: ${colors.black};
  border-bottom: 1px solid transparent;
  text-decoration: none;
  height: 16px;
  padding: 22px 0 21px;
  :hover {
    border-bottom-color: ${colors.black};
  }
  &.active {
    border-bottom-color: ${colors.black};
  }
`

export default Header
