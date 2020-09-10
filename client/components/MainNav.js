import React from 'react';

function MainNav (props) {
  const {currentUser, logoutUser } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">SpotiFav</div>
      <div className="navbar-text">Welcome {currentUser}!</div>
      <button className="btn btn-outline-secondary" onClick={logoutUser}>Log out</button>
    </nav>
  )
}

export default MainNav;