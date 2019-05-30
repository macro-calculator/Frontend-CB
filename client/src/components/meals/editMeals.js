// == Dependencies == //
import React from "react";
// == Components == //
import MealsDropDown from "./mealsDrop.js";
// == Style == //
import "../../cards.css";

function EditMeals(props) {
  return (
    <div className="EditMeals">
      <h3>Edit Meals Schedule</h3>
      <div className="card">
        <button onClick={props.editSwitch} className="minor cancel">
          x
        </button>
        <p>You are currently eating
        <h4>4 meals</h4>
        <h4>New Schedule:</h4>
        <MealsDropDown
        handleChanges={props.handleChange}
        mealChoice={props.state.mealChoice} />
        </p>
        <button onClick={props.editMeal} className="minor sub">Submit</button>
      </div>
    </div>
  );
}

export default EditMeals;
