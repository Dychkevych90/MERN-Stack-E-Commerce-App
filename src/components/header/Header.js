import React from "react";

import Announcement from "../announcement/announcement";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

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
          <div className="center">LAMA.</div>
          <div className="right">
            <button className="registr">Registr</button>
            <button className="login">Sign In</button>
            <button className="cart_btn">
              <AddShoppingCartIcon />
              <div className="count" />
            </button>
          </div>
        </Style.Header>
      </div>
    </>
  );
};

export default Header;
