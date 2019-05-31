
// == Dependencies == //
import React, { Component } from "react";
import axios from 'axios'
// == Components == //
import CurrentMeals from "./currentMeals";
import MealsInfo from "./mealsInfo";
import EditMeals from "./editMeals";
// == Style == //
import "../../cards.css";
// == Data == //
import {dummyUser, dummyMacros, dummyMealMacs} from '../../dummyData'

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMeal: false,
      mealChoice: "",
      macros: {}
    };
  }
  componentDidMount() {
    //check if user is authenticated
    //if not, redirect to log-in page
    //if so, fetch data
    console.log("componentDidMount");
    this.fetchMeals()
  }
  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    if (this.props !== prevProps) {
      this.fetchMeals()
    }
  }
  fetchMeals() {
    this.setState({...this.state, macros: this.props.macros})
   
    // this.setState({...this.state, mealMacs: dummyMealMacs, mealChoice: dummyUser.mealChoice })
  }
  editSwitch = e => {
    e.preventDefault();
    this.setState({ editMeal: !this.state.editMeal });
  };
  editMeals = e => {
    let newMeals = {...this.props.state.user, macros: this.state.macros}
    axios
     .put(`https://lambda-macro-calculator.herokuapp.com/users/update`, newMeals, {
       headers: {
           Authorization: `Bearer ${localStorage.getItem('token')}`
       }
     })
     .then(res => this.setState({...this.state, user: res.data}))
     .catch(err => console.dir(err));
    // this.setState({...this.state, mealChoice:dummyUser.mealChoice})
    this.editSwitch(e);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
      console.log("meals state :", this.state)
    return (
      <div className="Meals">
        <div className="card-container">
          <MealsInfo recommended={this.state.macros}/>
          {this.state.editMeal ? (
            <EditMeals
              handleChange={this.handleChange}
              state={this.state}
              editSwitch={this.editSwitch}
              editMeals={this.editMeals}
            />
          ) : (
            <CurrentMeals
              handleChange={this.handleChange}
              state={this.state}
              editSwitch={this.editSwitch}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Meals;
