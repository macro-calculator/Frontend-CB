//*Ability to edit current weight or goal and have macros be updated.
// == Dependencies ==//
import React from "react";
// == Style == //
import "../../cards.css";

const Goal = (props) => {
  console.log("props.state", props.state);
  let goal = props.state.user.goal;
  console.log("goal: ", goal)
  let diet;
  switch (goal) {
    case "aggressive weight loss":
      diet = "20% deficit";
      break;
    case "moderate weight loss":
      diet = "15% deficit";
      break;
    case "weight loss":
      diet = "10% deficit";
      break;
    case "maintain weight":
      diet = "maintenance diet";
      break;
    case "moderate weight gain":
      diet = "10% surplus";
      break;
    case "aggressive weight gain":
      diet = "15% surplus";
      break;
    default:
      diet = "mystery diet";
  }
  return (
    <div className="Goal">
      <h3>Current Goal</h3>
      <div className="card">
        {goal ? (
          <p>
            Your current goal is
            <h4>{goal}</h4>
            with a
            <h4>
              {diet}
            </h4>
          </p>
        ) : (
          <p>
            <br />
            You haven't set a goal.
            <br />
            <br />
            Edit your goal by clicking the button below.
          </p>
        )}
        <button
          onClick={props.editSwitch}
          className={goal ? "minor goal" : "minor goal empty"}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Goal;
