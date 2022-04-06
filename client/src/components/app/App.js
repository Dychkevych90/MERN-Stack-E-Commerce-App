import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router";

import { useSelector } from "react-redux";

import Home from "../../pages/home/Home";
import Header from "../../components/header/Header";
import ProductsPage from "../../pages/products/products";
import Product from "../../pages/product/product";
import Cart from "../../pages/cart/cart";
import Footer from "../footer/footer";
import NewsLetter from "../newLetter/newsLetter";
import ScrollToTop from "../scrollToTop/scrollToTop";
import Login from "../../pages/login/login";
import Register from "../../pages/registr/registration";

const App = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user);
  const getLocation =
    location.pathname.split("/")[1] === "login" ||
    location.pathname.split("/")[1] === "registration";

  const _checkToken = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log('token', token)
  };

  useEffect(() => {
    _checkToken().catch( ( error ) => console.error( error ) );
  }, [ currentUser ]);

  return (
    <>
      {!getLocation && (
        <>
          <Header />
          <ScrollToTop />
        </>
      )}

      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/products"} component={ProductsPage} />
        <Route exact path={"/product"} component={Product} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/registration"} component={Register} />
      </Switch>

      {!getLocation && (
        <>
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
