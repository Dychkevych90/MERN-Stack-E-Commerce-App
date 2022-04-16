import React, { useState } from "react";

import MainButton from "../layout/button/button";

import icons from "../../constants/icons";

import {
  Product,
  Info,
  FullScreenImage,
  Title,
  Price,
  ProductWrapper,
} from "./styled";
import { LinkWrap } from "../layout/button/styled";

const {
  AddShoppingCartIcon,
  SearchIcon,
  FavoriteBorderIcon,
  CloseIcon
} = icons;

const ProductItem = ({ data }) => {
  const [ShowFullImage, setShowFullImage] = useState(false);

  const isShowFullImage = () => {
    const body = document.querySelector("body");
    body.classList.toggle("hidden-scroll");
    setShowFullImage(!ShowFullImage);
  };

  const addItemToCard = () => {
    console.log('data', data.id)
  }

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
          <button onClick={isShowFullImage} className={"icon"}>
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

      {ShowFullImage && (
        <FullScreenImage>
          <img src={data.img} />
          <button onClick={isShowFullImage} className={"close-button"}>
            <CloseIcon />
          </button>
        </FullScreenImage>
      )}
    </ProductWrapper>
  );
};

export default ProductItem;
