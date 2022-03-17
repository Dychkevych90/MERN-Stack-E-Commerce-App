import React from "react";

import {Route, Switch} from "react-router";

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

      <Switch>
        <Route exact path={ "/" } component={ Home } />
        <Route exact path={ "/products" } component={ ProductsPage } />
        <Route exact path={ "/product" } component={ Product } />
        <Route exact path={ "/cart" } component={ Cart } />
      </Switch>  

      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
