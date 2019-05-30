//*Ability to edit current weight or goal and have macros be updated.
// == Dependencies ==//
import React from "react";
// == Style == //
import Card from "@material-ui/core/Card";
import "../../cards.css";

function Goal() {
  return (
    <div className="Goal">
      <h3>Current Goal</h3>
      <div className="card">
        <p>You are currently eating to <br/></p>
        
        <button className="minor">Edit</button>
      </div>
    </div>
  );
}

export default Goal;
