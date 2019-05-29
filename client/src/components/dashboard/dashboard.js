//render:
//breakdown
//editGoal
//meals

// == Dependencies == //
import React from "react";
// == Components == //
import Breakdown from "./breakdown";
import Meals from "../meals/meals";
// == Style == //
import Container from '@material-ui/core/Container';
import "../../cards.css";


function Dashboard() {
  return (
    <div className="Dashboard container">
      <Breakdown />
      {/* <Meals /> */}
    </div>
  );
}

export default Dashboard;
