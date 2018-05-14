import React from 'react'
import SignUpForm from './SignUpForm.jsx'
import {withRouter} from 'react-router-dom'

const SignUpPage = function ({history}) {
    return (
        <React.Fragment>
            <h2>Sign Up</h2>
            <SignUpForm history={history} />
        </React.Fragment>
    )
}

export default withRouter(SignUpPage)