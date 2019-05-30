// == Dependencies == //
import React from "react";
// == Components == //
import MealsDropDown from "./mealsDrop.js";
// == Style == //
import "../../cards.css";

function EditMeals(props) {
    console.log("editmeals props.state", props.state)
  return (
    <div className="EditMeals">
      <h3>Edit Meals Schedule</h3>
      <div className="card">
        <button onClick={props.editSwitch} className="minor cancel">
          x
        </button>
        <p>
          You are currently eating
          <h4>4 meals</h4>
          <h4>New Schedule:</h4>
          <MealsDropDown
            handleChanges={props.handleChange}
            mealsChoice={props.state.mealsChoice}
          />
        </p>
        <button onClick={props.editMeals} className="minor sub">
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditMeals;
