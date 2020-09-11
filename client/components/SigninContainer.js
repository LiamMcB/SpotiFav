import React from 'react';
import LoginNav from './LoginNav';
import SigninBox from './SigninBox';

function SigninContainer(props) {
  const { signupUser, signupInfo, signupMessage } = props;
  return (
    <div>
      <LoginNav signupUser={signupUser} />
      <SigninBox signupInfo={signupInfo} signupMessage={signupMessage} />
    </div>
  )
}

export default SigninContainer;