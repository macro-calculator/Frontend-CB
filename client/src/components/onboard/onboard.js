//state: sign-in vs sign-up
//switch between signIn.js and signUp.js
// == Dependencies == //
import React from "react";
// == Components == //
import SignIn from "./signIn";
import SignUp from "./signUp";
import { useFormInput } from '../../hooks';
// == Style == //
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import "../../App.css";

function OnBoard() {
const signInput = useFormInput('')
  return (
    <div className="OnBoard container">
        {/* <SignIn /> */}
        <SignUp
        handleChanges={signInput.handleChanges}
        value={signInput.value} />
    </div>
  );
}

export default OnBoard;
