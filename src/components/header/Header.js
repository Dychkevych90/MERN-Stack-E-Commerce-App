import React from "react";

import {NavLink} from "react-router-dom";

import Announcement from "../announcement/announcement";

import icons from "../../constants/icons";

const { AddShoppingCartIcon, SearchIcon, FavoriteBorderIcon } = icons;

import * as Style from "./styled";

const Header = () => {
  return (
    <>
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
            <button className="registr">Registration</button>
            <button className="login">Sign In</button>
            <button className="cart_btn">
              <AddShoppingCartIcon className="icon" />
              <div className="count" />
            </button>
            <button className="cart_btn">
              <FavoriteBorderIcon className="icon" />
              <div className="count" />
            </button>
          </div>
        </Style.Header>
      </div>
    </>
  );
};

export default Header;
