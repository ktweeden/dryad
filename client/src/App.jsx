import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StoryContainer from './containers/StoryContainer.jsx';
import NavBar from './components/NavBar.jsx'
import SignInPage from './components/SignInPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import AccountPage from './components/AccountPage.jsx'
import * as routes from './constants/routes'
import withAuthentication from './withAuthentication.jsx'
import './App.css'



const App = function(props) {
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Route exact path={routes.HOME} component={() => < StoryContainer authUser={props.authUser}/>} />
          <Route exact path={routes.SIGN_IN} component={() => < SignInPage />} />
          <Route exact path={routes.SIGN_UP} component={() => < SignUpPage />} />
          <Route exact path={routes.ACCOUNT} component={() => < AccountPage authUser={props.authUser}/>} />
        </React.Fragment>
      </Router>
    )
}

export default withAuthentication(App);

