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
import React from "react";
// == Style == //
import Card from '@material-ui/core/Card';

function Meals() {
  return <div className="Meals"><Card>I am the Meals component.</Card></div>;
}

export default Meals;
