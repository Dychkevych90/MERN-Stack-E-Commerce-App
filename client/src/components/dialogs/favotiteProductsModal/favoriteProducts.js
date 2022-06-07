import React from 'react';
import axios from 'axios';

import { setProducts } from '../../../redux-store/action';
import ServerSettings from '../../../services/serverSettings';

import {
  FavoriteProductsDialogsWrapper
} from './styled';

const FavoriteProductsDialog = () => {
  const getFavoriteProducts = useSelector( ( state ) => state.products );

  const onDeleteItem = ( id ) => {
    const server = new ServerSettings();
    const index = getFavoriteProducts.findIndex(elem => elem._id === id);
    const old = getFavoriteProducts[index];
    const newItem = {...old, favorite: !old.favorite}

    const newData = [...getFavoriteProducts.slice(0, index), newItem,  ...getFavoriteProducts.slice(index + 1)];

    try {
      await axios.put(`${server.getApi()}products/${item._id}`, newItem);
      dispatch( setProducts( newData ) );
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FavoriteProductsDialogsWrapper>
      {
        getFavoriteProducts.map( ( item ) => {
          return (
            <FavoriteItem key={item._id} data={item} onDeleteItem={onDeleteItem}/>
          )
        })
      }
    </FavoriteProductsDialogsWrapper>
  )
}

export default FavoriteProductsDialog;