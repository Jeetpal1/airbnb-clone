import React from "react";
import Card from "./Card";
import data from "../data";

function Experiences() {
  let cards = data.map((experience) => {
    return <Card key={experience.id} {...experience} />;
  });
  return <div className="experiences">{cards}</div>;
}

export default Experiences;
