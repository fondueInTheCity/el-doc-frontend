/* eslint-disable no-unused-vars */
import './Title.css'
import { logOut } from '../firebase/Firebase.js'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='main-header'>
      <div className='container'>
        <h1 className='mh-logo'>
          <img
            src='http://flexbox.ninja/assets/images/logo.svg'
            width='170'
            height='95'
            alt='Flexbox.ninja'
          />
        </h1>
        <nav className='main-nav'>
          <ul className='main-nav-list'>
            <li>
              <NavLink to='/profile'>Profile</NavLink>
            </li>
            <li>
              <NavLink to='/'>Work Directory</NavLink>
            </li>
            <li>
              <button className='signOutButton' onClick={logOut}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
