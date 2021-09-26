import React from "react";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
    </div>
  );
};

export default App;
