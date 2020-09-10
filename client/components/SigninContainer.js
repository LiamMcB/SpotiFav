import React from 'react';
import LoginNav from './LoginNav';
import SigninBox from './SigninBox';

function SigninContainer(props) {
  const { signupUser, signupInfo } = props;
  return (
    <div>
      <LoginNav signupUser={signupUser} />
      <SigninBox signupInfo={signupInfo} />
    </div>
  )
}

export default SigninContainer;