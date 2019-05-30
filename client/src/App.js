import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import OnBoard from "./components/onboard/onboard";
import Dashboard from "./components/dashboard/dashboard";
import Meals from "./components/meals/meals";
import NotFound from "./NotFound";
import Navbar from "./Navbar";

import Container from "@material-ui/core/Container";
import "./App.css";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route path="/sign" component={OnBoard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/meals" component={Meals} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default withRouter(App);
