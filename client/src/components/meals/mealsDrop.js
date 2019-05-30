import React from "react";

function MealsDropDown(props) {
  return (
    <select
      name="mealChoice"
      value={props.mealChoice}
      onChange={props.handleChanges}
    >
      <option />
      <option value={"4,0"}>4 meals</option>
      <option value={"3,0"}>3 meals</option>
      <option value={"3,2"}>3 meals + 2 snacks</option>
    </select>
  );
}

export default MealsDropDown;
