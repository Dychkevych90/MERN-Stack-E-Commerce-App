import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../productItem/productItem";
import Pagination from '../pagination/pagination';

import { setProducts, setCart } from "../../redux-store/action";
import ServerSettings from "../../services/serverSettings";

import * as Style from './style'

const Products = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ usersPerPage ] = useState( 8 );

  const dispatch = useDispatch();
  const currentUser = useSelector( ( state ) => state.user);
  const getAllProducts = useSelector( ( state ) => state.products )
  const cart = useSelector( ( state ) => state.cart);
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

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const showProducts = getAllProducts.slice( firstUserIndex, lastUserIndex )
  
  const paginate = pageNumber => setCurrentPage( pageNumber )

  const updateCart = (item) => {
    dispatch( setCart( [ ...cart, item  ] ) );
  }

  const setFavoriteProduct = (item) => {
    const index = getAllProducts.findIndex(elem => elem._id === item._id);
      const old = getAllProducts[index];
      const newItem = {...old, favorite: !old.favorite}

      const newData = [...getAllProducts.slice(0, index), newItem,  ...getAllProducts.slice(index + 1)];

      dispatch( setProducts( newData ) );
  }

  return (
    <Style.ProductsWrap>
      <div className={ 'products-header' }>
        <span>Go Purchase</span>
        <div>Shop</div>
      </div>
      <div className={ 'products-section' }>
        {
          showProducts.map((item) => {
            return (
              <ProductItem
                data={ item }
                key={ item._id }
                updateCart={ updateCart }
                setFavoriteProduct={ setFavoriteProduct }
              />
            )
          })
        }
      </div>

        <Pagination
          usersPerPage={ usersPerPage }
          totalUsers={ getAllProducts.length }
          paginate={ paginate }
          currentPage={ currentPage }
        />

    </Style.ProductsWrap>
  );
};

export default Products;
