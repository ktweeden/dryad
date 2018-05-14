import React, { Component } from 'react'
import { auth } from '../firebase'
import SignUpLink from './SignUpLink.jsx'

class SignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...INITIAL_STATE
        }

        this.formSubmit = this.formSubmit.bind(this)
    }

    render() {
        const {
            email,
            password,
            error
        } = this.state

        const isInvalid =
            password === '' ||
            email === ''

        return (
            <React.Fragment>
                <form onSubmit={this.formSubmit}>
                    <input type="text"
                        value={email}
                        onChange={event => this.setState({ email: event.target.value })}
                        placeHolder="Email Address"
                    />
                    <input type="text"
                        value={password}
                        onChange={event => this.setState({ password: event.target.value })}
                        placeHolder="Password"
                    />
                    <button type="submit" disabled={isInvalid}>Sign Up</button>

                    {error && <p>{error.message}</p>}
                </form>
                <SignUpLink />
            </React.Fragment>
        )
    }

    formSubmit(event) {
        event.preventDefault()
        auth.doSignInWithEmailAndPassword(this.state.email, this.state.passwordOne)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }))
                this.props.history.goBack()
            })
            .catch(error => {
                this.setState({ error: error })
            })
    }
}

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

export default SignInForm