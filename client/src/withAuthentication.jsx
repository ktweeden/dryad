import React from 'react'

import AuthUserContext from './components/AuthUserContext';

const withAuthentication = (Component) => {   
    class WithAuthentication extends React.Component {

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => <Component authUser={authUser}/>}
                </AuthUserContext.Consumer>
            )
        }
    }

    return WithAuthentication;
}

export default withAuthentication;