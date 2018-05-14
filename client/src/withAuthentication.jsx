import React from 'react';

import AuthUserContext from './components/AuthUserContext';
import { firebase } from './firebase';

const withAuthentication = (Component) => {   
    class WithAuthentication extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            };
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState(() => ({ authUser }))
                    : this.setState(() => ({ authUser: null }))
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