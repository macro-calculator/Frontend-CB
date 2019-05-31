//render:
//breakdown
//editGoal
//meals

// == Dependencies == //
import React, { Component } from "react";
import axios from "axios";
// == Components == //
import Breakdown from "./breakdown";
import Meals from "../meals/meals";
// == Style == //
import "../../cards.css";
// == Data == //
import { dummyUser, dummyMacros } from "../../dummyData";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        username: "",
        password: "",
        email: "",
        gender: "",
        age: 0,
        height: 0,
        currentweight: 0,
        activitylevel: "",
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
    if (!localStorage.getItem("token")) {
      console.log("no item");
      this.props.history.replace("/sign");
    } else {
      this.fetchUserData();
    }
  }
  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    if (this.props !== prevProps) {
      if (!localStorage.getItem("token")) {
        console.log("no item");
        this.props.history.replace("/sign");
      } else {
        this.fetchUserData();
      }
    }
  }
  fetchUserData() {
    axios
      .get(`https://lambda-macro-calculator.herokuapp.com/users/current`, {
        headers: {
            Authorization: `${localStorage.getItem('token')}`
        }
      })
      .then()
      .catch();
    //this.setState({ ...this.state, user: dummyUser, macros: dummyMacros });
  }
  render() {
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <h3>Welcome, {this.state.user.name}</h3>
        <Breakdown state={this.state} />
        <Meals state={this.state} />
      </div>
    );
  }
}

export default Dashboard;
