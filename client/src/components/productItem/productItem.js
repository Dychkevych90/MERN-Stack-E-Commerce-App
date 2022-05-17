import React from "react";

import MainButton from "../layout/button/button";

import icons from "../../constants/icons";

import {
  Product,
  Info,
  Title,
  Price,
  ProductWrapper,
} from "./styled";
import { useSelector } from "react-redux";

const {
  AddShoppingCartIcon,
  SearchIcon,
  FavoriteBorderIcon,
  CloseIcon
} = icons;

const ProductItem = ({ data, updateCart, setFavoriteProduct }) => {
  const currentUser = useSelector((state) => state.user);

  const addItemToCard = () => {
    if( Object.entries(currentUser).length === 0 ) {
      alert('Please log in or register!')
    } else {
      updateCart( data );
    }
  };

  const addItemToFavorite = () => {
    setFavoriteProduct( data );
  };

  return (
    <ProductWrapper favorite={data.favorite}>

      <button className={"add-to-favorite"} onClick={addItemToFavorite}>
        <FavoriteBorderIcon />
      </button>

      <Product>
        <div className={"circle"} />
        <img src={data.img} className={"product-image"} alt="product" />

        <Info to={`product/${data._id}`}>
          <div className={"icon"}>
            <AddShoppingCartIcon />
          </div>
          <button className={"icon"}>
            <SearchIcon />
          </button>
          <div className={"icon"}>
            <FavoriteBorderIcon />
          </div>
        </Info>
      </Product>

      <Title to={`product/${data._id}`}>{data.title}</Title>

      <Price>{`$ ${data.price}`}</Price>

      <MainButton
        text={"Add to card"}
        fontSize={"14px"}
        border={"none"}
        backgroundColor={"teal"}
        width={"100%"}
        color={"#fff"}
        onClick={ addItemToCard }
      />

    </ProductWrapper>
  );
};

export default ProductItem;
