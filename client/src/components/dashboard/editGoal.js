//*Ability to edit current weight or goal and have macros be updated.
// == Dependencies ==//
import React from "react";
// == Components == //
import GoalDropDown from "../onboard/goal";
// == Style == //
import "../../cards.css";

function EditGoal(props) {
  let goal = props.state.user.goal;
  return (
    <div className="EditGoal">
      <h3>Edit Goal</h3>
      <div className="card">
        <button onClick={props.editSwitch} className="minor cancel">
          x
        </button>
        <p>
          Your current goal is
          <h4>
            {goal}
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
