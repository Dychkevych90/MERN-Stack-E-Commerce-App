import React from "react";

import BannerSection from "../../components/banners/banners";
import Categories from "../../components/categories/categories";
import Products from "../../components/products/products";
import Slider from "../../components/slider/slider";

const Home = () => {
  return (
    <>
      <Slider />
      <BannerSection/>
      <Products />
      <Categories />
    </>
  );
};

export default Home;
