//*Ability to edit current weight or goal and have macros be updated.
// == Dependencies ==//
import React from "react";
// == Style == //
import "../../cards.css";

function Goal(props) {
    let goal = props.state.goal
let verb = null
let percent = null
let noun = null
    if (goal.includes('deficit')) {
         verb = 'lose'
         percent = goal.split(' ')[0]
         noun = 'deficit'
    } else if (goal.includes('maintain')) {
        verb = 'maintain'
        percent = 'maintanence'
        noun = 'diet'
    } else if (goal.includes('surplus')){
        verb = 'gain'
        percent = goal.split(' ')[0]
        noun = 'surplus'
    }
    console.log(verb, percent, noun)
  return (
    <div className="Goal">
      <h3>Current Goal</h3>
      <div className="card">
        <p>You are currently eating to
        <h4>{verb} weight</h4>
        with a
        <h4>{percent} {noun}</h4>
        </p>
        <button onClick={props.editSwitch} className="minor goal">Edit</button>
      </div>
    </div>
  );
}

export default Goal;
