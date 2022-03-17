import React from "react";

import ProductItem from "../productItem/productItem";

import { popularProducts } from "../../data";

import * as Style from './style'

const Products = () => {
  return (
    <Style.ProductsWrap>
      {
        popularProducts.map((item, key) => {
          return (
            <ProductItem data={ item } key={ key } />
          )
        })
      }
    </Style.ProductsWrap>
  );
};

export default Products;
