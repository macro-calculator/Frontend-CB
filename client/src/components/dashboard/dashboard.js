//render:
//breakdown
//editGoal
//meals

// == Dependencies == //
import React from "react";
// == Components == //
import Breakdown from "./breakdown";
//import Goal from "./goal";
import Meals from "../meals/meals";
// == Style == //
import Container from '@material-ui/core/Container';

function Dashboard() {
  return (
    <div className="Dashboard">
    <Container>
      I am the Dashboard component.
      <Breakdown />
      {/* <Goal /> */}
      <Meals />
      </Container>
    </div>
  );
}

export default Dashboard;
