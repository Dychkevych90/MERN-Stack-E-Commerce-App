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

const {
  AddShoppingCartIcon,
  SearchIcon,
  FavoriteBorderIcon,
  CloseIcon
} = icons;

const ProductItem = ({ data, updateCart }) => {

  const addItemToCard = () => {
    updateCart( data );
  };

  return (
    <ProductWrapper>

      <div className={"add-to-favorite"}>
        <FavoriteBorderIcon />
      </div>

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
