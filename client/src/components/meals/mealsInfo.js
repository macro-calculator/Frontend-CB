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
            <td><h4>Fat:</h4></td>
            <td><p>{recommended.fatsPerMeal?recommended.fatsPerMeal:'0'}g</p></td>
            <td><p>{recommended.fatsPerSnack?recommended.fatsPerSnack:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Carbs:</h4></td>
            <td><p>{recommended.carbsPerMeal?recommended.carbsPerMeal:'0'}g</p></td>
            <td><p>{recommended.carbsPerSnack?recommended.carbsPerSnack:'0'}g</p></td>
          </tr>
          <tr>
            <td><h4>Protein:</h4></td>
            <td><p>{recommended.proteinPerMeal?recommended.proteinPerMeal:'0'}g</p></td>
            <td><p>{recommended.proteinPerSnack?recommended.snacks.proteinPerSnack:'0'}g</p></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MealsInfo;
