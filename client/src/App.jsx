import React, { Component } from 'react';
import StoryContainer from './containers/StoryContainer.jsx';
import NavBar from './components/NavBar.jsx'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <StoryContainer />
      </React.Fragment>
    );
  }
}

export default App;

