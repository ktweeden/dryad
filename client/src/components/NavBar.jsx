import React from 'react'
import {Link} from 'react-router-dom'
import SignOutButton from './SignOutButton.jsx'
import AuthUserContext from './AuthUserContext.jsx';
import './NavBar.css'
import * as routes from '../constants/routes';

const NavBar = function() {
  return (
    <AuthUserContext.Consumer> 
    {
      authUser => {
        return (
          <nav className="nav-bar">
            <h1>Dryad</h1>
            {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
          </nav>
        )
      }
    }
    </ AuthUserContext.Consumer>
  )
}

const NavigationAuth = function() {
  return (
    <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
    </ul>
  )
}

const NavigationNonAuth = function() {
  return (
    <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign in</Link></li>
    <li><Link to={routes.SIGN_UP}>Sign up</Link></li>
    </ul>
  )
}


export default NavBar