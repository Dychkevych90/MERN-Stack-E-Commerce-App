import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Announcement from "../announcement/announcement";
import AddProduct from "../dialogs/addProduct/addProduct";
import LogoutDialogs from '../dialogs/logoutDialog/logoutDialog'

import {
  isLoadingSuccessful,
  setUser,
  setCart,
} from "../../redux-store/action";

import icons from "../../constants/icons";

const {
  AddShoppingCartIcon,
  SearchIcon,
  FavoriteBorderIcon,
  LogoutIcon,
} = icons;

import * as Style from "./styled";
import FavoriteProductsDialog from "../dialogs/favotiteProductsModal/favoriteProducts";

const Header = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [favoriteProducts, setFavoriteProducts ] = useState([]);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowFavoriteModal, setShowFavoriteModal] = useState(false);

  const currentUser = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.isFetching);
  const cart = useSelector((state) => state.cart);
  const getAllProducts = useSelector( ( state ) => state.products )

  const dispatch = useDispatch();
  const ref = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  useOnClickOutside(ref, () => setShowFavoriteModal(false));

  useEffect(() => {
    window.addEventListener("scroll", isHeaderSticky);
    return () => window.removeEventListener("scroll", isHeaderSticky);
  });

  const isHeaderSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const LogOut = (e) => {
    e.preventDefault();
    if (localStorage.getItem("token")) {
      localStorage.clear();
      dispatch(isLoadingSuccessful(false));
      dispatch(setUser({}));
    }
  };

  useEffect(() => {
    const favorite = getAllProducts.filter(el => el.favorite === true);
    if(favorite){
      setFavoriteProducts(favorite)
    }
  }, [ getAllProducts ])

  return (
    <>
      <div className={"fake-header"} />
      <div className={"header-section"}>
        <Announcement />

        <div className="container">
          <Style.Header>
            <div className="left">
              <Style.SearchBar>
                <input className="input" type="text" />
                <SearchIcon className="icon" />
              </Style.SearchBar>
            </div>

            <NavLink className="center" to={"/"}>
              DEVELOPER.
            </NavLink>

            <div className="right">
              {currentUser.isAdmin && (
                <button
                  onClick={() => setShowAddProductModal(!showAddProductModal)}
                  style={{ marginRight: "20px" }}
                >
                  add product
                </button>
              )}
              {!isLoading && (
                <>
                  <NavLink to={"/registration"} className="registr">
                    Registration
                  </NavLink>
                  <NavLink to={"/login"} className="login">
                    Sign In
                  </NavLink>
                </>
              )}
              {isLoading && (
                <>
                  <NavLink to={"/cart"} className="cart_btn">
                    <AddShoppingCartIcon className="icon" />
                    {cart.length >= 1 && (
                      <div className="count">{cart.length}</div>
                    )}
                  </NavLink>
                  <button className="cart_btn" onClick={() => setShowFavoriteModal(!isShowFavoriteModal)}>
                    <FavoriteBorderIcon className="icon" />
                    { favoriteProducts.length >= 1 && <div className="count">{ favoriteProducts.length }</div> }
                    {
                      isShowFavoriteModal && (
                        <FavoriteProductsDialog
                        favoriteProducts={favoriteProducts}
                        outSideClick={ref}
                        />
                      )
                    }
                  </button>
                </>
              )}
              {isLoading && (
                <button className="logout-btn" onClick={() => setIsShowLogoutModal(true)}>
                  <LogoutIcon />
                </button>
              )}
            </div>
          </Style.Header>
        </div>
      </div>

      {showAddProductModal && <AddProduct />}
      {
        isShowLogoutModal && (
          <LogoutDialogs 
            setIsShowLogoutModal={setIsShowLogoutModal}
          />
        )
      }
    </>
  );
};

export default Header;