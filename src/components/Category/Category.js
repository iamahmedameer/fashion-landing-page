import React from "react";
import "./Category.css";
import image1 from "./assets/category-image1.png";
import image2 from "./assets/category-image2.png";
import image3 from "./assets/category-image3.png";
import image4 from "./assets/category-image4.png";
const Category = () => {
  return (
    <div className="category">
      <div className="left">
        <div className="left-top">
          <button className="category-button">Category Name</button>
          <img src={image1} alt="" />
        </div>
        <div className="left-bottom">
          <div className="left-bottom-left">
            <button className="category-button">Category Name</button>
            <img src={image2} alt="" />
          </div>
          <div className="left-bottom-right">
            <button className="category-button">Category Name</button>
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      <div className="right overlay">
        <button className="category-button">Category Name</button>
        <img src={image4} alt="" />
      </div>
    </div>
  );
};

export default Category;
