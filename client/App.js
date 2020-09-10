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

  loginUser(e) {
    // Get username and password from input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Make request body from the two
    const reqBody = {username, password}; 
    // Fetch info from db
    fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
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