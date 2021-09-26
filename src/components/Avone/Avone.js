import React from "react";
import "./Avone.css";
import image1 from "./assets/styles-image1.png";
import image2 from "./assets/styles-image2.png";
import image3 from "./assets/styles-image3.png";

const Avone = () => {
  return (
    <div>
      <h3 className="avone-heading">AVONE'S STYLES</h3>
      <p className="avone-description">Choose Your Favorite Color</p>
      <div className="container">
        <img className="image1" src={image1} alt="" />
        <img className="image2" src={image2} alt="" />
        <img className="image3" src={image3} alt="" />
      </div>
    </div>
  );
};
export default Avone;
