//take in user and password
//if correct, push to dashboard
//else, show alert

// == Dependencies == //
import React from "react";
// == Style == //
import "../../cards.css";

function SignIn() {
  return (
    <div className="SignIn">
         <h2>Sign In</h2>
      <div className="card">
      
       <form>
           Username<br/>
           <input/><br/><br/>
           Password<br/>
           <input/><br/><br/>
           <button>Sign In</button><br/><br/>
           <button>Or Create an Account</button>
       </form>
      </div>
    </div>
  );
}

export default SignIn;
