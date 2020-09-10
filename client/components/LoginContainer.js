import React from 'react';
import LoginNav from './LoginNav';
import LoginBox from './LoginBox';

function LoginContainer(props) {
  const { loginUser, signupUser } = props;
  return (
    <div>
      <LoginNav signupUser={signupUser} />
      <LoginBox loginUser={loginUser}/>
    </div>
  )
}

export default LoginContainer;