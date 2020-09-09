import React, {Component} from 'react';
import LoginContainer from './components/LoginContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    // If not logged in, render login page
    if (!this.state.isLoggedIn) {
      return (
        <LoginContainer />
      )
    // Else render web app
    } else {
      return (
        <h1>Logged In!</h1>
      )
    }
  }
}

export default App;