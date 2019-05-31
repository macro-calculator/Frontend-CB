// // RESPONSE FROM MEALS PAGE
// {
//     fats: int
//     proteins: int
//     carbs: int
//     calories: int
// }

//User can select one of three choices:
// 4 meals a day,
// 3 meals a day,
// or 3 meals and 2 snacks each day.
// Once they click a choice, it will tell them
// how many grams of fats, proteins, and carbs they need at each meal or snack.

// 4 meals a day: take the grams of each p,f,c and divide by 4.
//That’s how many grams of each they should eat per meal.

// 3 meals a day: take the grams of each and divide by 3.

// 3 meals and 2 snacks: Divide each macronutrient amount by 8,
//that is how many per snack you should have.
//Then multiply those numbers by 2,
//that’s how many grams of each you should have per meal.

// == Dependencies == //
import React, { Component } from "react";
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
      mealMacs: {

      }
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
    this.setState({...this.state, mealMacs: dummyMealMacs, mealChoice: dummyUser.mealChoice })
  }
  editSwitch = e => {
    e.preventDefault();
    this.setState({ editMeal: !this.state.editMeal });
  };
  editMeals = e => {
    let newMeals = this.state.mealsChoice;
    dummyUser.mealChoice = newMeals
    console.log("newMeals: ", newMeals)
    this.setState({...this.state, mealChoice:dummyUser.mealChoice})
    this.editSwitch(e);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="Meals">
        <div className="card-container">
          <MealsInfo recommended={this.state.mealMacs}/>
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
