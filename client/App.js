import React, {Component} from 'react';
import LoginContainer from './components/LoginContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    // Fetch info from db
    console.log("Logging in user");
  }

  render() {
    // If not logged in, render login page
    if (!this.state.isLoggedIn) {
      return (
        <LoginContainer loginUser={this.loginUser} />
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