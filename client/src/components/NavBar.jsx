import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import * as routes from '../constants/routes';

const NavBar = function(props) {
    return (
        <nav className="nav-bar">
            <h1>Dryad</h1>
            <ul>
                <li><Link to={routes.SIGN_IN}>Sign in</Link></li>
                <li><Link to={routes.SIGN_UP}>Sign up</Link></li>
                <li><Link to={routes.ACCOUNT}>Account</Link></li>
                <li><Link to={routes.HOME}>Home</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar