import React from 'react'
import Request from './helpers/request.js'

import AuthUserContext from './components/AuthUserContext';
import { firebase } from './firebase';

const withAuthentication = (Component) => {   
    class WithAuthentication extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                authUser: null,
                user: '',
                username: ''
            }
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null })
                const userRequest = new Request(`http://localhost:3001/user/${authUser.uid}`)
                userRequest.get(user => {
                    this.setState({user: user._id})
                    this.setState({username: user.userName})
                })
            })
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component />
                </AuthUserContext.Provider>
            )
        }
    }

    return WithAuthentication;
}

export default withAuthentication;