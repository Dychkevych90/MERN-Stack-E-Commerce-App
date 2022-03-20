import React, {useState} from "react";

import icons from "../../constants/icons";

import { ProductItemWrap, Info, FullScreenImage } from "./styled";

const { AddShoppingCartIcon, SearchIcon, FavoriteBorderIcon, CloseIcon } = icons;

const ProductItem = ({ data }) => {
  const [ ShowFullImage, setShowFullImage ] = useState(false)
  console.log(data)
  const isShowFullImage = () => {
    const body = document.querySelector('body');
    body.classList.toggle("hidden-scroll");

    setShowFullImage ( !ShowFullImage )
  }
  
  return (
    <>
      <ProductItemWrap>
      <div className={ 'circle' } />
      <img src={ data.img } className={ 'product-image' } alt="product" />

      <Info>
        <div className={ 'icon' }><AddShoppingCartIcon /></div>
        <button onClick={ isShowFullImage } className={ 'icon' }><SearchIcon /></button>
        <div className={ 'icon' }><FavoriteBorderIcon /></div>
      </Info>
      
      </ProductItemWrap>

      { ShowFullImage && (
        <FullScreenImage>
          <img src={ data.img } />
          <button onClick={ isShowFullImage } className={ "close-button" }>
            <CloseIcon />
          </button>
        </FullScreenImage>
      ) }
    </>
  )
};

export default ProductItem;
