import React from "react";
import star from "../images/star.png";
function Card(props) {
  return (
    <div className="card">
      {props.image}
      <div className="card--title">
        <img src={star} alt="star logo" className="card--star"/>
        <span className="grey">{props.rating}</span>
        <p className="card--details">{props.details}</p>
        <p className="card--price">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
