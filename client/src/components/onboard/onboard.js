//state: sign-in vs sign-up
//switch between signIn.js and signUp.js
// == Dependencies == //
import React, { Component } from "react";
// == Components == //
import SignIn from "./signIn";
import SignUp from "./signUp";

// == Style == //
import "../../App.css";
import axios from 'axios'

class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      name: "",
      username: "",
      password: "",
      email: "",
      gender: "",
      age: "",
      height: "",
      currentweight: "",
      activitylevel: "",
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
        name,
      username,
      password,
      email,
      gender,
      age,
      height,
      currentweight,
      activitylevel,
      goal
    } = this.state;
    const newUser = {name, username, password, email, gender, activitylevel, goal };
    newUser.age = Number(age);
    newUser.height = Number(height) / 12;
    newUser.currentweight = Number(currentweight);
    console.log("newUser", newUser);
    console.log("TODO: connect to register backend");
    axios
      .post(
        `https://lambda-macro-calculator.herokuapp.com/users/create`,
        newUser
      )
      .then(res=>console.log(res.data))
      .catch(err=>console.dir(err));
    console.log("TODO: connect to backend login");
    
  };
  signIn = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username, password };
    axios.post(`https://lambda-macro-calculator.herokuapp.com/oauth/token`,  `grant_type=password&username=${username}&password=${password}`, {
        headers: {
            Authorization: `Base ${btoa('lambda-client:lambda-secret')}`,
           'Content-Type': 'application/x-www-form-urlencoded'
    }
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.dir(err))
    console.log("user", user);
    console.log("TODO: connect to backend login");
    console.log("TODO: set token on localStorage")
    console.log("TODO: push to protected dashboard");
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
