import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../productItem/productItem";
import MainButton from '../layout/button/button';

import { setProducts } from "../../redux-store/action";
import ServerSettings from "../../services/serverSettings";

import { popularProducts } from "../../data";

import * as Style from './style'

const Products = ({ showButton = true }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector( ( state ) => state.user);
  const getAllProducts = useSelector( ( state ) => state.products )
  console.log('products', getAllProducts)
  
  useEffect(() => {
    /* Get all products from server */
    const setUsers = async () => {
      const server = new ServerSettings();
  
      try {
        if( currentUser.isAdmin ) {
          const res = await axios.get(`${server.getApi()}products/`);
          dispatch( setProducts( res.data ) )
        } else {
          dispatch( setProducts( [] ) )
        }
      } catch (error) {
        console.log(error)
      }
    };
  
    setUsers().catch((error) => console.error(error));
    }, [ currentUser ]);

  return (
    <Style.ProductsWrap>
      <div className={ 'products-section' }>
        {
          getAllProducts.map((item) => {
            return (
              <ProductItem data={ item } key={ item.id } />
            )
          })
        }
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
