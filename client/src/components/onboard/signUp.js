// // models should look something like this
// // USER
// {
//     gender: string
//     age: int
//     height: int // converted on frontend
//     currentweight: int
//     name: string
//     email: string
//     password: string
//     activitylevel:string
//     goal: string

// }

// == Dependencies == //
import React from "react";
// == Components ==//
import HeightDropDown from './height'
// == Style == //
import Card from "@material-ui/core/Card";
import "../../cards.css";

const SignUp = props => {
    console.log("state:", props.state)
    

  return (
    <div className="SignUp">
       
        <h2>Sign Up</h2>
        <div className="card-container">
         <div className="card">
       <form onSubmit={props.addUser}>
           Username<br/>
           <input
           name="username"
           value={props.state.username}
           onChange={props.handleChanges}
        /><br/><br/>
           Password<br/>
           <input
           name="password"
           value={props.state.password}
           onChange={props.handleChanges}/><br/><br/>
           Email<br/>
           <input
           name="email"
           value={props.state.email}
           onChange={props.handleChanges}/><br/><br/>
           Age<br/>
           <input
           name="age"
           value={props.state.age}
           onChange={props.handleChanges}/><br/><br/>
           Gender<br/>
           <input
           name="gender"
           value={props.state.gender}
           onChange={props.handleChanges}/>\
       </form>
      </div>
      <div className="card">
       <form>
           Height<br/>
        <HeightDropDown handleChanges={props.handleChanges} height={props.state.height} />
           {/* <input
           name="height"
           value={props.state.height}
           onChange={props.handleChanges}/><br/><br/> */}
           Weight<br/>
           <input
           name="weight"
           value={props.state.weight}
           onChange={props.handleChanges}/><br/><br/>
           Activity Level<br/>
           <input
           name="activityLevel"
           value={props.state.activityLevel}
           onChange={props.handleChanges}/><br/><br/>
           Goal<br/>
           <input
           name="goal"
           value={props.state.goal}
           onChange={props.handleChanges}/><br/><br/>
           <button onClick={props.addUser}>Sign Up</button>
       </form>
      </div>
    </div>
    </div>
  );
}

export default SignUp;

//get name, email, password, age, gender from user

//get height (drop down list of heights listed as 5’ 7”, 5’ 8”, etc.),
//currentWeight, lbs
//activityLevel, how many days per week they exercise (drop down list: 0 days, 1-2 days, 3-4 days, 5-6 days, 7 days)
//goal from user, (drop down list: aggressive weight loss (20% deficit), moderate weight loss (15% deficit), weight loss (10% deficit), maintain weight, moderate weight gain (10% surplus), aggressive weight gain (15% deficit).

//add to user object
//register complete user object to database
//push to dashboard
