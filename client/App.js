import React, {Component} from 'react';
import LoginContainer from './components/LoginContainer';
import MainContainer from './components/MainContainer';
import SigninContainer from './components/SigninContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      currentUser: '',
      userId: '',
      signingIn: false
    }
    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.signupInfo = this.signupInfo.bind(this);
  }

  // Validates username and pwd with db to login user
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
      this.setState({isLoggedIn: true, currentUser: username, userId: data["id"]})
    })
    .catch(err => console.log("Error during login:", err));
  }

  // Redirects user to sign-in page
  signupUser() {
    this.setState({signingIn: true})
  }

  // Signs user up with the db
  signupInfo() {
    // Get username and password from input
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;
    // Make request body from the two
    const reqBody = {username, password}; 
    // Fetch info from db
    fetch('/api/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(reqBody)
    })
    .then(res => res.json())
    .then(data => {
      // Render main page by changing state
      this.setState({isLoggedIn: true, currentUser: username, signingIn: false, id: data["id"]})
    })
    .catch(err => console.log("Error during signup:", err));
  }

  render() {
    // If signing in, render signin
    if (this.state.signingIn) {
      return (
        <SigninContainer signupUser={this.signupUser} signupInfo={this.signupInfo} />
      )
    }
    // If not logged in, render login page
    else if (!this.state.isLoggedIn) {
      return (
        <LoginContainer loginUser={this.loginUser} signupUser={this.signupUser} />
      )
    // Else render web app
    } else {
      return (
        <MainContainer currentUser={this.state.currentUser} userId={this.state.userId}/>
      )
    }
  }
}

export default App;