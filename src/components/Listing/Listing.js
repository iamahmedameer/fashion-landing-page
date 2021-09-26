import React from "react";
import "./Listing.css";

const Listing = (props) => {
  return (
    <div>
      <h3 className="listing-heading">{props.heading}</h3>
      <p className="listing-description">{props.description}</p>
      <div className="product-list">
        <div className="product">
          <img src={props.productImage1} alt="" />
          <p className="brand">{props.brand1}</p>
          <p className="product-name">{props.productName1}</p>
          <p className="price">{props.price1}</p>
          <p className="discounted-price">{props.discountedPrice1}</p>
        </div>
        <div className="product">
          <img src={props.productImage2} alt="" />
          <p className="brand">{props.brand2}</p>
          <p className="product-name">{props.productName2}</p>
          <p className="price">{props.price2}</p>
          <p className="discounted-price">{props.discountedPrice2}</p>
        </div>
        <div className="product">
          <img src={props.productImage3} alt="" />
          <p className="brand">{props.brand3}</p>
          <p className="product-name">{props.productName3}</p>
          <p className="price">{props.price3}</p>
          <p className="discounted-price">{props.discountedPrice3}</p>
        </div>
        <div className="product">
          <img src={props.productImage4} alt="" />
          <p className="brand">{props.brand4}</p>
          <p className="product-name">{props.productName4}</p>
          <p className="price">{props.price4}</p>
          <p className="discounted-price">{props.discountedPrice4}</p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
