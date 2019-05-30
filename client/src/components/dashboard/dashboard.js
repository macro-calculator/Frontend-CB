//render:
//breakdown
//editGoal
//meals

// == Dependencies == //
import React, { Component } from "react";
// == Components == //
import Breakdown from "./breakdown";
import Meals from "../meals/meals";
// == Style == //
import "../../cards.css";
// == Data == //
import {dummyUser, dummyMacros} from '../../dummyData'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        email: "",
        gender: "",
        age: 0,
        height: 0,
        weight: 0,
        activityLevel: "",
        goal: "",
        mealChoice: ""
      },
      macros: {
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    };
  }
  componentDidMount() {
    //check if user is authenticated
    //if not, redirect to log-in page
    //if so, fetch data
    console.log("componentDidMount");
    this.fetchUserData()
  }
  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    if (this.props !== prevProps) {
      this.fetchUserData()
    }
  }
  fetchUserData() {
    this.setState({...this.state, user: dummyUser, macros: dummyMacros})
  }
  render() {
    return (
      <div className="Dashboard container">
        <Breakdown state={this.state} />
        <Meals state={this.state}/>
      </div>
    );
  }
}

export default Dashboard;
