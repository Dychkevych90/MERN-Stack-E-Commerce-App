import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

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
import CheckoutPage from "../../pages/checkout/checkout";

import { setAllUsers } from '../../redux-store/action';

import ServerSettings from "../../services/serverSettings";

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector( ( state ) => state.user);
  const getAllUsers = useSelector( ( state ) => state.users )
  const isLoadingSuccessful = useSelector( ( state ) => state.isFetching )
  console.log('currentUser', currentUser, 'getAllUsers', getAllUsers)

  useEffect(() => {
  /* Get all users from server */
  const setUsers = async () => {
    const server = new ServerSettings();

    try {
      if( currentUser.isAdmin ) {
        const res = await axios.get(`${server.getApi()}users/`);
        dispatch( setAllUsers( res.data ) )
      } else {
        dispatch( setAllUsers( [] ) )
      }
    } catch (error) {
      console.log(error)
    }
  };

  setUsers().catch((error) => console.error(error));
  }, [ currentUser ]);

  return (
    <>
      { isLoadingSuccessful && (
        <>
          <Header />
          <ScrollToTop />
        </>
      )}

      <Switch>
        <Route exact path={"/"} >
        { 
          isLoadingSuccessful
            ? <Home/>
            : <Redirect to={'/login'}/>
        }
        </Route>
        <Route exact path={"/products"} component={ProductsPage} />
        <Route exact path={"/product"} component={Product} />
        <Route exact path={"/cart"} component={Cart} />
        <Route path={"/product/:id"} component={Product}/>
        <Route path={'/checkout'} component={CheckoutPage} />
        <Route exact path={"/login"} >
          { 
            isLoadingSuccessful
              ? <Redirect to={'/'}/>
              : <Login/>
          }
        </Route>
        <Route exact path={"/registration"} >
        { 
            isLoadingSuccessful
              ? <Redirect to={'/'}/>
              : <Register/>
        }
        </Route>
      </Switch>

      { isLoadingSuccessful && (
        <>
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
