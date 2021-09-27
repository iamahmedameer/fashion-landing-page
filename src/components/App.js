import React from "react";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Listing from "./Listing/Listing";
import Navbar from "./Navbar/Navbar";
import wImage1 from "./assets/womens-fashion1.png";
import wImage2 from "./assets/womens-fashion2.png";
import wImage3 from "./assets/womens-fashion3.png";
import wImage4 from "./assets/womens-fashion4.png";
import mImage1 from "./assets/mens-fashion1.png";
import mImage2 from "./assets/mens-fashion2.png";
import mImage3 from "./assets/mens-fashion3.png";
import mImage4 from "./assets/mens-fashion4.png";
import Avone from "./Avone/Avone";
import Banner from "./Banner/Banner";

const App = () => {
  const womensListing = {
    product1: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: wImage1,
    },
    product2: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: wImage2,
    },
    product3: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: wImage3,
    },
    product4: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: wImage4,
    },
  };
  const mensListing = {
    product1: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: mImage1,
    },
    product2: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: mImage2,
    },
    product3: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: mImage3,
    },
    product4: {
      productName: "GREEN MUSCLE FIT POLO SHIRT",
      brandName: "IGURE",
      price: "$229",
      discountedPrice: "$129",
      image: mImage4,
    },
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Listing
        heading="WOMEN’S FASHION"
        description="Shop our new arrivals from established brands"
        productImage1={womensListing.product1.image}
        productName1={womensListing.product1.productName}
        brand1={womensListing.product1.brandName}
        price1={womensListing.product1.price}
        discountedPrice1={womensListing.product1.discountedPrice}
        productImage2={womensListing.product2.image}
        productName2={womensListing.product2.productName}
        brand2={womensListing.product2.brandName}
        price2={womensListing.product2.price}
        discountedPrice2={womensListing.product2.discountedPrice}
        productImage3={womensListing.product3.image}
        productName3={womensListing.product3.productName}
        brand3={womensListing.product3.brandName}
        price3={womensListing.product3.price}
        discountedPrice3={womensListing.product3.discountedPrice}
        productImage4={womensListing.product4.image}
        productName4={womensListing.product4.productName}
        brand4={womensListing.product4.brandName}
        price4={womensListing.product4.price}
        discountedPrice4={womensListing.product4.discountedPrice}
      />
      <Listing
        heading="MEN’S FASHION"
        description="Shop our new arrivals from established brands"
        productImage1={mensListing.product1.image}
        productName1={mensListing.product1.productName}
        brand1={mensListing.product1.brandName}
        price1={mensListing.product1.price}
        discountedPrice1={mensListing.product1.discountedPrice}
        productImage2={mensListing.product2.image}
        productName2={mensListing.product2.productName}
        brand2={mensListing.product2.brandName}
        price2={mensListing.product2.price}
        discountedPrice2={mensListing.product2.discountedPrice}
        productImage3={mensListing.product3.image}
        productName3={mensListing.product3.productName}
        brand3={mensListing.product3.brandName}
        price3={mensListing.product3.price}
        discountedPrice3={mensListing.product3.discountedPrice}
        productImage4={mensListing.product4.image}
        productName4={mensListing.product4.productName}
        brand4={mensListing.product4.brandName}
        price4={mensListing.product4.price}
        discountedPrice4={mensListing.product4.discountedPrice}
      />
      <Avone />
      <Banner />
    </div>
  );
};

export default App;
