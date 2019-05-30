import React from "react";

function GoalDropDown(props) {
  return (
    <select name="goal" value={props.goal} onChange={props.handleChanges}>
      <option />
      <option value={"20% deficit"}>
        aggressive weight loss (20% deficit)
      </option>
      <option value={"15% deficit"}>moderate weight loss (15% deficit)</option>
      <option value={"10% deficit"}>weight loss (10% deficit)</option>
      <option value={"maintain"}>maintain weight</option>
      <option value={"10% surplus"}>moderate weight gain (10% surplus)</option>
      <option value={"20% surplus"}>
        aggressive weight gain (15% deficit)
      </option>
    </select>
  );
}

export default GoalDropDown;
