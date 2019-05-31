//take in user and password
//if correct, push to dashboard
//else, show alert

// == Dependencies == //
import React from "react";
// == Components == //
// == Style == //
import "../../cards.css";

const SignIn = props => {
  return (
    <div className="SignIn">
      <h2>Sign In</h2>
      <div className="card">
        <form onSubmit={props.signIn}>
          <h4>Username</h4>
          <input
            name="username"
            value={props.state.username}
            onChange={props.handleChanges}
          />
          <h4>Password</h4>
          <input
          type="password"
            name="password"
            value={props.state.password}
            onChange={props.handleChanges}
          />
          <br /> 
        </form>
          <p className="switch" onClick={props.switchSign}>Don't have an account yet?</p>
          <br />
          <button onClick={props.signIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
