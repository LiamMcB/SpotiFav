import React from 'react';

function LoginNav(props) {
  const { signupUser } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">SpotiFav</div>
      <button className="btn btn-success" onClick={signupUser}>Signup</button>
    </nav>
  )
}

export default LoginNav;