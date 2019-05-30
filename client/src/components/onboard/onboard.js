//state: sign-in vs sign-up
//switch between signIn.js and signUp.js
// == Dependencies == //
import React, { Component } from "react";
// == Components == //
import SignIn from "./signIn";
import SignUp from "./signUp";

// == Style == //
import "../../App.css";

class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      username: "",
      password: "",
      email: "",
      gender: "",
      age: "",
      height: "",
      weight: "",
      activityLevel: "",
      goal: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  switchSign = e => {
    e.preventDefault();
    this.setState({ signIn: !this.state.signIn });
  };
  registerUser = e => {
    e.preventDefault();
    const {
      username,
      password,
      email,
      gender,
      age,
      height,
      weight,
      activityLevel,
      goal
    } = this.state;
    const newUser = { username, password, email, gender, activityLevel, goal };
    newUser.age = Number(age);
    newUser.height = Number(height) / 12;
    newUser.weight = Number(weight);
    console.log("newUser", newUser);
    console.log("TODO: connect to register backend");
    console.log("TODO: connect to backend login")
    console.log("TODO: push to protected dashboard");
  };
  signIn = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username, password };
    console.log("user", user)
    console.log("TODO: connect to backend login");
  };
  render() {
    return (
      <div className="OnBoard">
        {this.state.signIn ? (
          <SignIn
            handleChanges={this.handleChange}
            state={this.state}
            switchSign={this.switchSign}
            signIn={this.signIn}
          />
        ) : (
          <SignUp
            handleChanges={this.handleChange}
            addUser={this.registerUser}
            state={this.state}
            switchSign={this.switchSign}
          />
        )}
      </div>
    );
  }
}

export default OnBoard;
