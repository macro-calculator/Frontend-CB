//*Ability to edit current weight or goal and have macros be updated.
// == Dependencies ==//
import React from "react";
// == Components == //
import GoalDropDown from "../onboard/goal";
// == Style == //
import "../../cards.css";

function EditGoal(props) {
  let currentGoal = props.state.user.goal;
  let verb = null;
  let percent = null;
  let noun = null;
  if (currentGoal.includes("deficit")) {
    verb = "lose";
    percent = currentGoal.split(" ")[0];
    noun = "deficit";
  } else if (currentGoal.includes("maintain")) {
    verb = "maintain";
    percent = "maintenance";
    noun = "diet";
  } else if (currentGoal.includes("surplus")) {
    verb = "gain";
    percent = currentGoal.split(" ")[0];
    noun = "surplus";
  }
  console.log(verb, percent, noun);
  return (
    <div className="EditGoal">
      <h3>Edit Goal</h3>
      <div className="card">
        <button onClick={props.editSwitch} className="minor cancel">
          x
        </button>
        <p>
          You are currently eating at
          <h4>
            {percent} {noun}
          </h4>
          <h4>New Goal:</h4>
          <GoalDropDown
            handleChanges={props.handleChange}
            goal={props.state.newGoal}
          />
        </p>
        <button onClick={props.editGoal} className="minor sub">
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditGoal;
