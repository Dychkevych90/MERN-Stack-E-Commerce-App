import React from "react";

import ProductItem from "../productItem/productItem";

import { popularProducts } from "../../data";

import * as Style from './style'

const Products = () => {
  return (
    <Style.ProductsWrap>
      {
        popularProducts.map((item) => {
          return (
            <ProductItem data={ item } key={ item.id } />
          )
        })
      }
    </Style.ProductsWrap>
  );
};

export default Products;
