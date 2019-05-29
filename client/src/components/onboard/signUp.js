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
// == Style == //
import Card from "@material-ui/core/Card";
import "../../cards.css";

function SignUp() {
  return (
    <div className="SignUp">
       
        <h2>Sign Up</h2>
        <div className="card-container">
         <div className="card">
       <form>
           Username<br/>
           <input/><br/><br/>
           Password<br/>
           <input/><br/><br/>
           Email<br/>
           <input/><br/><br/>
           Age<br/>
           <input/><br/><br/>
       </form>
      </div>
      <div className="card">
       <form>
           Gender<br/>
           <input/><br/><br/>
           Height<br/>
           <input/><br/><br/>
           Weight<br/>
           <input/><br/><br/>
           Activity Level<br/>
           <input/><br/><br/>
           Goal<br/>
           <input/><br/><br/>
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
