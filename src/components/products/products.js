import React from "react";

import ProductItem from "../productItem/productItem";
import MainButton from '../layout/button/button';

import { popularProducts } from "../../data";

import * as Style from './style'

const Products = ({ showButton = true }) => {
  return (
    <Style.ProductsWrap>
      <div className={ 'products-section' }>
        {
          popularProducts.map((item) => {
            return (
              <ProductItem data={ item } key={ item.id } />
            )
          })
        }
      </div>

      { showButton && (
        <MainButton
          text={ 'Show All' }
          backgroundColor={ '#fff' }
          color={ '#000' }
          border={ '1px solid #000' }
          fontSize={ '18px' }
          width={ '160px' }
          link={ true }
        />
      ) }
    </Style.ProductsWrap>
  );
};

export default Products;
