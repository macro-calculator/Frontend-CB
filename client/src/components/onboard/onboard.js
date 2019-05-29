//state: sign-in vs sign-up
//switch between signIn.js and signUp.js

import React from 'react';
import SignIn from './signIn';
import SignUp from './signUp';
import SignUp2 from './signUp2';

function OnBoard() {
  return (
    <div className="OnBoard">
      I am the OnBoard component.
      <SignIn />
      <SignUp />
      <SignUp2 />
    </div>
  );
}

export default OnBoard;
