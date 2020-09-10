import React from 'react';

function SigninBox(props) {
  const { signupInfo } = props;
  return (
    <main className='login-box'>
      <div className='login d-flex justify-content-center align-items-center'>
        <h1>Sign Up</h1>
      </div>
  
      <div className='login-form'>
        <div className="form-group">
              <input autoComplete="off" autoFocus className="form-control" name="username" placeholder="Username" type="text" id="signin-username" />
          </div>
          <div className="form-group">
              <input className="form-control" name="password" placeholder="Password" type="password" id="signin-password" />
          </div>
        <button className="btn btn-success login-button d-flex justify-content-center" type="submit" onClick={signupInfo}>Click to Signup</button>
      </div>
    </main>
  )
}

export default SigninBox;