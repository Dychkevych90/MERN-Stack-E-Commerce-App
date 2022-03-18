import React, { useEffect } from "react";

import {NavLink} from "react-router-dom";

import Announcement from "../announcement/announcement";

import icons from "../../constants/icons";

const { AddShoppingCartIcon, SearchIcon, FavoriteBorderIcon } = icons;

import * as Style from "./styled";

const Header = () => {

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () =>
      window.removeEventListener('scroll', isSticky);
  });

     
  const isSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 10 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

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
              <NavLink to={ "/registration" } className="registr">Registration</NavLink>
              <NavLink to={ "/login" } className="login">Sign In</NavLink>
              <NavLink to={ "/" } className="cart_btn">
                <AddShoppingCartIcon className="icon" />
                <div className="count" />
              </NavLink>
              <NavLink to={ "/" } className="cart_btn">
                <FavoriteBorderIcon className="icon" />
                <div className="count" />
              </NavLink>
            </div>
          </Style.Header>
        </div>
      </div>
    </>
  );
};

export default Header;
