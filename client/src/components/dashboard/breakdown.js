// == Dependencies ==//
import React, { Component } from "react";
import CurrentGoal from "./currentGoal";
import EditGoal from "./editGoal";
import Recommended from "./recommended";
// == Style == //
import "../../cards.css";
// == Data == //
import {dummyUser, dummyMacros, dummyMealMacs} from '../../dummyData';

class Breakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editGoal: false,
      goal: ""
    };
  }
  editSwitch = e => {
    e.preventDefault();
    this.setState({ editGoal: !this.state.editGoal });
  };
  editGoal = e => {
    let newGoal = this.state.goal;
    dummyUser.goal = newGoal;
    this.editSwitch(e);
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="Breakdown">
        <div className="card-container">
          <Recommended state={this.props.state} />
          {this.state.editGoal ? (
            <EditGoal
              handleChange={this.handleChange}
              state={this.props.state}
              editSwitch={this.editSwitch}
              editGoal={this.editGoal}
            />
          ) : (
            <CurrentGoal
              state={this.props.state}
              editSwitch={this.editSwitch}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Breakdown;
