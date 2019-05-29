//render:
//breakdown
//editGoal
//meals

import React from "react";
import Breakdown from "./breakdown";
import Goal from "./goal";
import Meals from "../meals/meals";

function Dashboard() {
  return (
    <div className="Dashboard">
      I am the Dashboard component.
      <Breakdown />
      <Goal />
      <Meals />
    </div>
  );
}

export default Dashboard;
