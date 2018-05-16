import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StoryContainer from './containers/StoryContainer.jsx';
import NavBar from './components/NavBar.jsx'
import SignInPage from './components/SignInPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import AccountPage from './components/AccountPage.jsx'
import * as routes from './constants/routes'
import AuthUserContext from './components/AuthUserContext';
import { firebase } from './firebase';
import './App.css'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null })
    })
  }
  
  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <React.Fragment>
            <NavBar/>
            <Route exact path={routes.HOME} component={() => < StoryContainer/>} />
            <Route exact path={routes.SIGN_IN} component={() => < SignInPage />} />
            <Route exact path={routes.SIGN_UP} component={() => < SignUpPage />} />
            <Route exact path={routes.ACCOUNT} component={() => < AccountPage/>} />
          </React.Fragment>
        </Router>
        </AuthUserContext.Provider>
    )
  }
}

export default App

