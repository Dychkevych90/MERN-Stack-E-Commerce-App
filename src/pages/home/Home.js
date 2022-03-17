import React from "react";

import Categories from "../../components/categories/categories";
import Products from "../../components/products/products";
import Slider from "../../components/slider/slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
