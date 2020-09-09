import React from 'react';
import LoginNav from './LoginNav';
import LoginBox from './LoginBox';

function LoginContainer(props) {
  const { loginUser } = props;
  return (
    <div>
      <LoginNav />
      <LoginBox loginUser={loginUser}/>
    </div>
  )
}

export default LoginContainer;