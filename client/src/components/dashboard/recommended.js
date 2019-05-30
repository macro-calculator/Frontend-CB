//*Ability to edit current weight or goal and have macros be updated.
// == Dependencies ==//
import React from "react";
// == Style == //
import "../../cards.css";

function Recommended(props) {
  let recommended = props.state.macros;
  return (
    <div className="Recommended">
      <h3>Your Recommended Daily Macros</h3>
      <div className="card">
        <table>
          <tr>
            <td><h4>Calories:</h4></td>
            <td><p>{recommended.calories}</p></td>
          </tr>
          <tr>
            <td><h4>Fat:</h4></td>
            <td>{recommended.fat}g</td>
          </tr>
          <tr>
            <td><h4>Carbs:</h4></td>
            <td><p>{recommended.carbs}g</p></td>
          </tr>
          <tr>
            <td><h4>Protein:</h4></td>
            <td><p>{recommended.protein}g</p></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Recommended;
