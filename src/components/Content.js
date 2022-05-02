import React from "react";
import displayPic from "../images/photo-grid.png";
function Content() {
  return (
    <div className="content">
      <img src={displayPic} alt="Display pic" className="content--pic" />
      <h2 className="content--heading">Online Experiences</h2>
      <p className="content--para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Content;
