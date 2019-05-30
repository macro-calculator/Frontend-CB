import React from "react";

function ActivityDropDown(props) {
  return (
    <select
      name="activityLevel"
      value={props.activityLevel}
      onChange={props.handleChanges}
    >
      <option />
      <option value={"0"}>0 days</option>
      <option value={"1-2"}>1-2 days</option>
      <option value={"3-4"}>3-4 days</option>
      <option value={"5-6"}>5-6 days</option>
      <option value={"7"}>7 days</option>
    </select>
  );
}

export default ActivityDropDown;
