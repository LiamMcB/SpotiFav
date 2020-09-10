import React, {Component} from 'react';
import LoginContainer from './components/LoginContainer';
import MainContainer from './components/MainContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      currentUser: ''
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
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(reqBody)
    })
    .then(res => res.json())
    .then(data => {
      this.setState({isLoggedIn: true, currentUser: username})
    })
    .catch(err => console.log("Error during login:", err));
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
        <MainContainer currentUser={this.state.currentUser}/>
      )
    }
  }
}

export default App;