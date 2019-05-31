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
        token: '',
      user: {
        userid: null,
        username: "",
        email: "",
        gender: "",
        age: null,
        height: null,
        currentweight: null,
        name: "",
        activitylevel: "",
        goal: "",
        macros: {
            macroid: null,
            inches: null,
            protein: null,
            carb: null,
            fat: null,
            calories: null,
            meals: "",
            proteinPerMeal: null,
            fatsPerMeal: null,
            carbsPerMeal: null,
            proteinPerSnack: null,
            fatsPerSnack: null,
            carbsPerSnack: null
        }
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
        this.setState({...this.state, token: localStorage.getItem("token")})
        this.fetchUserData()
      
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
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => this.setState({...this.state, user: res.data}))
      .catch(err => console.dir(err));
    //this.setState({ ...this.state, user: dummyUser, macros: dummyMacros });
  }
  render() {
      console.log("Dashboard state: ", this.state)
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <h3>Welcome, {this.state.user.name}</h3>
        <Breakdown state={this.state} />
        <Meals state={this.state} macros={this.state.user.macros} />
      </div>
    );
  }
}

export default Dashboard;
