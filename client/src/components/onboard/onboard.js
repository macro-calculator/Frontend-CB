//state: sign-in vs sign-up
//switch between signIn.js and signUp.js
// == Dependencies == //
import React from "react";
// == Components == //
import SignIn from "./signIn";
import SignUp from "./signUp";
// == Style == //
import Container from "@material-ui/core/Container";
import "../../App.css";

function OnBoard() {
  return (
    <div className="OnBoard">
      <Container>
        I am the OnBoard component.
        <SignIn />
        <SignUp />
      </Container>
    </div>
  );
}

export default OnBoard;
