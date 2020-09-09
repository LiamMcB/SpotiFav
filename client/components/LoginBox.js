import React from 'react';

function LoginBox(props) {
  const { loginUser } = props;
  return (
    <main className='login-box'>
      <div className='login d-flex justify-content-center align-items-center'>
      <h1>Login</h1>
        <svg viewBox="0 0 16 16" className="bi bi-music-player music-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
          <path fillRule="evenodd" d="M11 3H5v3h6V3zM5 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zm3 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <circle cx="8" cy="11" r="1"/>
        </svg>
      </div>
      <form onSubmit={loginUser} className='login-form' method="post">
        <div className="form-group">
            <input autoComplete="off" autoFocus className="form-control" name="username" placeholder="Username" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" name="password" placeholder="Password" type="password" />
        </div>
        <button className="btn btn-success login-button d-flex justify-content-center" type="submit">Log In</button>
      </form>
    </main>
  )
}

export default LoginBox;