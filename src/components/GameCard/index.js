import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Character:</strong> {props.character}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeGame(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}
export default GameCard;