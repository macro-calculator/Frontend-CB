// == Dependencies == //
import React from "react";
// == Style == //
import "../../cards.css";

function CurrentMeals(props) {
    let choice = props.state.mealChoice.split(',')
    let meals = choice[0]
    let snacks = choice[1]
    console.log("choice: ", choice)
  return (
    <div className="CurrentMeals">
      <h3>Current Meal Schedule</h3>
      <div className="card">
        <p>
          You are currently eating<h4>{meals} meals</h4>
          and<h4>{snacks} snacks</h4>
          per day
        </p>
        <button onClick={props.editSwitch} className="minor meal">Edit</button>
      </div>
    </div>
  );
}

export default CurrentMeals;
