import React from "react";
import star from "../images/star.png";
function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`images/${props.coverImg}`}
        className="card--image"
        alt="experience pic"
      />
      <div className="card--title">
        <img src={star} alt="star logo" className="card--star" />
        <span className="grey">
          {props.stats.rating} ({props.stats.reviewCount}) • {props.location}
        </span>
        <p className="card--details">{props.title}</p>
        <p className="card--price">
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
