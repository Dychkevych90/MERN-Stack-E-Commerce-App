import React from "react";

import { ProductItemWrap, Info } from "./styled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductItem = ({ data }) => {
  return (
    <ProductItemWrap>
      <div className={'circle'} />
      <img src={data.img} className={'product-image'} alt="product" />

      <Info>
        <div className={'icon'}><AddShoppingCartIcon/></div>
        <div className={'icon'}><SearchIcon/></div>
        <div className={'icon'}><FavoriteBorderIcon/></div>
      </Info>
      
    </ProductItemWrap>
  )
};

export default ProductItem;
