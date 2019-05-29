//state: sign-in vs sign-up
//switch between signIn.js and signUp.js
// == Dependencies == //
import React from "react";
// == Components == //
import SignIn from "./signIn";
import SignUp from "./signUp";
// == Style == //
import Container from '@material-ui/core/Container';

function OnBoard() {
  return (
    <Container>
    <div className="OnBoard">
      I am the OnBoard component.
      <SignIn />
      <SignUp />
    </div>
    </Container>
  );
}

export default OnBoard;
