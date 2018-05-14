import React from 'react'
import { withRouter } from 'react-router-dom'
import SignInForm from './SignInForm.jsx'

const SignInPage = function ({history}) {
    return (
        <React.Fragment>
            <h2>Sign in</h2>
            <SignInForm history={history}/>
        </React.Fragment>
    )
}

export default withRouter(SignInPage)