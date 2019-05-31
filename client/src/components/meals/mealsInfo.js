// == Dependencies == //
import React from "react";
// == Style == //
import "../../cards.css";

function MealsInfo(props) {
    let recommended = props.recommended
    console.log("recommended: ", recommended)
  return (
    <div className="MealsInfo">
      <h3>Your Recommended Meal Macros</h3>
      <div className="card">
        <table>
            <tr><th>Macro</th><th>Meals</th><th>Snacks</th></tr>
          <tr>
            <td><h4>Calories:</h4></td>
            <td><p>{recommended.meals?recommended.meals.calories:'0'}</p></td>
            <td><p>{recommended.snacks?recommended.snacks.calories:'0'}</p></td>
          </tr>
          <tr>
            <td><h4>Fat:</h4></td>
            <td><p>{recommended.meals?recommended.meals.fat:'0'}g</p></td>
            <td><p>{recommended.snacks?recommended.snacks.fat:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Carbs:</h4></td>
            <td><p>{recommended.meals?recommended.meals.carbs:'0'}g</p></td>
            <td><p>{recommended.snacks?recommended.snacks.carbs:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Protein:</h4></td>
            <td><p>{recommended.meals?recommended.meals.protein:'0'}g</p></td>
            <td><p>{recommended.snacks?recommended.snacks.protein:'0'}g</p></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MealsInfo;
