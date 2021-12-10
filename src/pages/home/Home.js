import React from "react";

import Categories from "../../components/categories/categories";
import NewsLetter from "../../components/newLetter/newsLetter";
import Products from "../../components/products/products";
import Slider from "../../components/slider/slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories/>
      <Products/>
      <NewsLetter/>
    </>
  );
};

export default Home;
