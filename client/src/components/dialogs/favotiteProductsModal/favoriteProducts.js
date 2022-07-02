import React from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";

import FavoriteItem from './favoriteItem';

import { setProducts } from '../../../redux-store/action';
import ServerSettings from '../../../services/serverSettings';

import {
  FavoriteProductsDialogsWrapper
} from './styled';

const FavoriteProductsDialog = ({favoriteProducts, outSideClick}) => {
  const getFavoriteProducts = useSelector( ( state ) => state.products );

  const dispatch = useDispatch();

  const onDeleteItem = async ( id ) => {
    const server = new ServerSettings();
    const index = getFavoriteProducts.findIndex(elem => elem._id === id);
    const old = getFavoriteProducts[index];
    const newItem = {...old, favorite: !old.favorite}

    const newData = [...getFavoriteProducts.slice(0, index), newItem,  ...getFavoriteProducts.slice(index + 1)];

    try {
      await axios.put(`${server.getApi()}products/${id}`, newItem);
      dispatch( setProducts( newData ) );
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FavoriteProductsDialogsWrapper ref={outSideClick}>
      {
        favoriteProducts.map( ( item ) => {
          return (
            <FavoriteItem key={item._id} data={item} onDeleteItem={onDeleteItem}/>
          )
        })
      }
    </FavoriteProductsDialogsWrapper>
  )
}

export default FavoriteProductsDialog;