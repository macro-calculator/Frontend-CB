//take in user and password
//if correct, push to dashboard
//else, show alert

// == Dependencies == //
import React from "react";
// == Components == //
// == Style == //
import "../../cards.css";

const SignIn = (props) => {
  return (
    <div className="SignIn">
      <h2>Sign In</h2>
      <div className="card">
        <form onSubmit={props.addUser}>
            <h4>Username</h4>
            <input
              name="username"
              value={props.state.username}
              onChange={props.handleChanges}
            />
            <h4>Password</h4>
            <input
              name="password"
              value={props.state.password}
              onChange={props.handleChanges}
            /><br /> <br />
          <button>Sign In</button>
          <br />
          <br />
          Don't have an account yet?<br />
          <button onClick={props.switchSign}>Sign Up</button>
        </form>
    </div>
    </div>
  );
}

export default SignIn;
