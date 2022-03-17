import React from "react";

import Home from "../../pages/home/Home";
import Header from "../../components/header/Header";
import ProductsPage from "../../pages/products/products";
import Product from "../../pages/product/product";
import Cart from '../../pages/cart/cart'
import Footer from "../footer/footer";
import NewsLetter from "../newLetter/newsLetter";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      { /* <ProductsPage/> */ }
      { /* <Product/> */ }
      { /* <Cart/> */ }
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
