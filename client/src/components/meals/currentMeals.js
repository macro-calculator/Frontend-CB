// == Dependencies == //
import React from "react";
// == Style == //
import "../../cards.css";

function CurrentMeals(props) {
  return (
    <div className="CurrentMeals">
      <h3>Current Meal Schedule</h3>
      <div className="card">
        <p>
          You are currently eating<h4>4 meals</h4>
          and<h4>0 snacks</h4>
          per day
        </p>
        <button onClick={props.editSwitch} className="minor meal">Edit</button>
      </div>
    </div>
  );
}

export default CurrentMeals;
