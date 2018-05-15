import React, {Component} from 'react'
import {auth} from '../firebase'
import Request from '../helpers/request'
import './SignUpInForm.css'

class SignUpForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            ...INITIAL_STATE
        }

        this.formSubmit = this.formSubmit.bind(this)
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''

        return (
            <div className="sign-up-in-form">
                <form onSubmit={this.formSubmit}>
                    <input type="text" 
                        value={username}
                        onChange={event => this.setState({ username: event.target.value})}
                        placeholder="Username"
                    />
                    <input type="text"
                        value={email}
                        onChange={event => this.setState({ email: event.target.value })}
                        placeholder="Email Address"
                    />
                    <input type="password"
                        value={passwordOne}
                        onChange={event => this.setState({ passwordOne: event.target.value })}
                        placeholder="Password"
                    />
                    <input type="password"
                        value={passwordTwo}
                        onChange={event => this.setState({ passwordTwo: event.target.value })}
                        placeholder="Confirm Password"
                    />
                    <button type="submit" disabled={isInvalid}>Sign Up</button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    }

    formSubmit(event) {
        event.preventDefault()
        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.passwordOne)
            .then(authUser => {
                console.log('authUser is: ', authUser)
                const addUserRequest = new Request('http://localhost:3001/user')
                addUserRequest.post({ UID: authUser.user.uid, userName: this.state.username}, (user) => {
                    this.setState(() => ({ ...INITIAL_STATE }))
                    this.props.history.goBack()
                })
            })
            .catch(error => {
                this.setState({error: error})
            })
    }
}

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

export default SignUpForm