//render:
    //breakdown
    //editGoal
    //meals 

import React from 'react';
import Breakdown from './breakdown';
import Goal from './Goal';

function Dashboard() {
  return (
    <div className="Dashboard">
      I am the Dashboard component.
      <Breakdown />
      <Goal />
    </div>
  );
}

export default Dashboard;
