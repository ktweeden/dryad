import React, {Component} from 'react'

class SignUpForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            ...INITIAL_STATE
        }
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.props.formSubmit}>
                <input type="text" 
                    value={username}
                    onChange={event => this.setState({username: event.target.value})}
                    placeHolder="Full Name"
                />
                <input type="text"
                    value={email}
                    onChange={event => this.setState({ email: event.target.value })}
                    placeHolder="Email Address"
                />
                <input type="text"
                    value={passwordOne}
                    onChange={event => this.setState({ passwordOne: event.target.value })}
                    placeHolder="Password"
                />
                <input type="text"
                    value={passwordTwo}
                    onChange={event => this.setState({ passwordTwo: event.target.value })}
                    placeHolder="Confirm Password"
                />
                <button type="submit" disabled={isInvalid}>Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        )
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