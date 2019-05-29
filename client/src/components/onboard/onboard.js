//state: sign-in vs sign-up
//switch between signIn.js and signUp.js
// == Dependencies == //
import React, { Component } from "react";
// == Components == //
import SignIn from "./signIn";
import SignUp from "./signUp";

// == Style == //
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import "../../App.css";

class OnBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: true,
            username: '',
            password: '',
            email: '',
            gender: '',
            age: '',
            height: '',
            weight: '',
            activityLevel: '',
            goal: ''            
        };
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    registerUser = e => {
        e.preventDefault();
        const { username, password, email, gender, age, height, weight, activityLevel, goal } = this.state
        const newUser = { username, password, email, gender, activityLevel, goal }
        newUser.age = Number(age)
        newUser.height = Number(height) / 12
        newUser.weight = Number(weight)
        console.log("register", newUser)
        console.log("TODO: log user in")
        console.log("TODO: push to protected dashboard")
    }
    render() {
  return (
    <div className="OnBoard container">
    {this.sign}
        {/* <SignIn /> */}
        <SignUp
        handleChanges={this.handleChange}
        addUser={this.registerUser}
        state={this.state} />
    </div>
  );
}
}

export default OnBoard;
