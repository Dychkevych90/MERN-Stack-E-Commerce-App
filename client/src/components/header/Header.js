import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Announcement from "../announcement/announcement";
import AddProduct from "../dialogs/addProduct/addProduct";

import { isLoadingSuccessful, setUser } from '../../redux-store/action';

import icons from "../../constants/icons";

const {
  AddShoppingCartIcon,
  SearchIcon,
  FavoriteBorderIcon,
  LogoutIcon
} = icons;

import * as Style from "./styled";

const Header = () => {
  const [showAddProductModal, setShowAddProductModal] = useState( false );
  const currentUser = useSelector( ( state ) => state.user);
  const isLoading = useSelector( ( state ) => state.isFetching )
  const cart = useSelector( ( state ) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', isHeaderSticky);
    return () =>
      window.removeEventListener('scroll', isHeaderSticky);
  });

     
  const isHeaderSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 10 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  const LogOut = (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      localStorage.clear();
      dispatch( isLoadingSuccessful( false ) );
      dispatch( setUser( {} ) );
    }
  }

  return (
    <>
      <div className={ "fake-header" } />
      <div className={ "header-section" }>
        <Announcement />

        <div className="container">
          <Style.Header>
            <div className="left">

              <Style.SearchBar>
                <input className="input" type="text" />
                <SearchIcon className="icon" />
              </Style.SearchBar>
              
            </div>
            
            <NavLink className="center" to={ "/" }>DEVELOPER.</NavLink>
          
            <div className="right">
              {
                currentUser.isAdmin && (
                  <button onClick={() => setShowAddProductModal(!showAddProductModal)} style={{marginRight: '20px'}}>add product</button>
                )
              }
            {
              !isLoading && (
                <>
                  <NavLink to={ "/registration" } className="registr">Registration</NavLink>
                  <NavLink to={ "/login" } className="login">Sign In</NavLink>
                </>
              )
            }
              <NavLink to={ "/" } className="cart_btn">
                <AddShoppingCartIcon className="icon" />
              { cart.length >= 1 && <div className="count">{ cart.length }</div> }
              </NavLink>
              <NavLink to={ "/" } className="cart_btn">
                <FavoriteBorderIcon className="icon" />
              {/* { cart.length >= 1 && <div className="count">{ cart.length }</div> } */}
              </NavLink>
              {
                isLoading && (
                  <button
                    className="logout-btn"
                    onClick={ ( e ) => LogOut( e ) }
                  >
                    <LogoutIcon/>
                  </button>
                )
              }
            </div>
          </Style.Header>
        </div>
      </div>

      { showAddProductModal && <AddProduct/> }
    </>
  );
};

export default Header;
