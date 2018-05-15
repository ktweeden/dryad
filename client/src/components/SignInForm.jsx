import React, { Component } from 'react'
import { auth } from '../firebase'
import SignUpLink from './SignUpLink.jsx'
import './SignUpInForm.css'

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
            <div className="sign-up-in-form">
                <form onSubmit={this.formSubmit}>
                    <input type="text"
                        value={email}
                        onChange={event => this.setState({ email: event.target.value })}
                        placeholder="Email Address"
                    />
                    <input type="password"
                        value={password}
                        onChange={event => this.setState({ password: event.target.value })}
                        placeholder="Password"
                    />
                    <button type="submit" disabled={isInvalid}>Sign In</button>

                    {error && <p>{error.message}</p>}
                </form>
                <SignUpLink />
            </div>
        )
    }

    formSubmit(event) {
        event.preventDefault()
        auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
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