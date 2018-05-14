import React from 'react'
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';


const SignUpLink = function(props) {
    return (
        <p>Don't have and account? <Link to={routes.SIGN_UP}>Sign Up</Link></p>
    )
}

export default SignUpLink