// {
// 	"username": string,
// 	"password": string,
// 	"email": string,
// 	"age": integer,
// 	"height": decimal - this will need to be converted to inches on front end,
// 	"currentweight": integer,
// 	"name": string,
// 	"activitylevel: string,
// 	"goal": string
// }

//take in props: object from user input with name, email, password, age, gender
//get height (drop down list of heights listed as 5’ 7”, 5’ 8”, etc.), 
    //currentWeight, lbs
    //activityLevel, how many days per week they exercise (drop down list: 0 days, 1-2 days, 3-4 days, 5-6 days, 7 days)
    //goal from user, (drop down list: aggressive weight loss (20% deficit), moderate weight loss (15% deficit), weight loss (10% deficit), maintain weight, moderate weight gain (10% surplus), aggressive weight gain (15% deficit).
        //add to user object on props
//register complete user object to database
//push to dashboard


import React from 'react';

function SignUp2() {
  return (
    <div className="SignUp2">
      I am the SignUp2 component.
    </div>
  );
}

export default SignUp2;