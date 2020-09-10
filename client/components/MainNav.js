import React from 'react';

function MainNav (props) {
  const {currentUser} = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">SpotiFav</div>
      <div className="navbar-text">Welcome {currentUser}!</div>
    </nav>
  )
}

export default MainNav;