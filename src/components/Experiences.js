import React from "react";
import Card from "./Card";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";

function Experiences() {
  let img1 = <img src={pic1} alt="experience" className="experience" />;
  let img2 = <img src={pic2} className="experience" />;
  let img3 = <img src={pic3} className="experience" />;

  let allData = [
    {
      image: { img1 },
      rating: "5.0(0) * USA",
      details: "Life lessons with Katie Zaferes",
      price: "From $136 / person",
    },
    {
      image: { img2 },
      rating: "5.0(30) * USA",
      details: "Learn wedding photography",
      price: "From $125 / person",
    },
    {
      image: { img3 },
      rating: "4.8(2) * USA",
      details: "Group Mountain Biking",
      price: "From $50 / person",
    },
  ];

  return (
    <div className="experiences">
      <Card
        image={img1}
        rating="4.8(2) * USA"
        details="Group Mountain Biking"
        price="From $50 / person"
      />
      <Card
        image={img2}
        rating="5.0(30) * USA"
        details="Learn wedding photography"
        price="From $125 / person"
      />
      <Card
        image={img3}
        rating="4.8(2) * USA"
        details="Group Mountain Biking"
        price="From $50 / person"
      />
      {/* {this.allData.map((card)=>{
            return (<Card 
                image = {card.image}
                rating = {card.rating}
                details = {card.details}
                price = {card.price}
            /> )
        })} */}
    </div>
  );
}

export default Experiences;
