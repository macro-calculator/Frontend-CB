//After a user logs in, they'll be directed to their homepage 
//where their recommended total calories and macro breakdowns are shown

//Steps to calculate their recommended calories and macros: 
// 1. Convert their height in feet and inches into total inches. Multiply total feet by 12, and add the remaining inches they input.  Ex 5’ 7” = 67 inches. 

// 2. If female use the following formula:
// 	Women BMR=655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.5 x age in years).
// 	If male use the following formula 
// Men BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)

// 3. Multiply the BMR by their activity factor, shown below for each input option
// 	0 days= 1.2
// 1-2 days=1.375
// 3-4 days= 1.55
// 5-6 days=1.725
// 7 days=1.9 
// The resulting number is the Total Daily Energy Expenditure (TDEE)

// 4. Multiply the TDEE by the goal they selected: 
// aggressive weight loss (20% deficit): TDEE*0.8= Total calories 
// moderate weight loss (15% deficit): TDEE*0.85=total calories
// weight loss (10% deficit): TDEE*0.9=total calories
// maintain weight: TDEE= total calories
// moderate weight gain (10% surplus): TDEE*1.1=total calories
// aggressive weight gain (15% deficit): TDEE*1.15=total calories

// 5. Determine macros: take the total calories, and multiply by 0.075 to get grams of protein, by 0.1 to get grams of carbs, and by 0.033 to get grams of fat. I.e. if you need 2,000 calories per day it would look like this: 
// Protein grams= 2,000*0.075 = 150 grams
// Carb grams=2,000*0.1= 200 grams
// Fat grams= 2,000*0.033= 66 grams 
// This is the total grams you’d recommend to the user. 


import React from 'react';

function Breakdown() {
  return (
    <div className="Breakdown">
      I am the Breakdown component.
    </div>
  );
}

export default Breakdown;
