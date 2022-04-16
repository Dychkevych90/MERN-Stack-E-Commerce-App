import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../productItem/productItem";
import MainButton from '../layout/button/button';
import Pagination from '../pagination/pagination';

import { setProducts } from "../../redux-store/action";
import ServerSettings from "../../services/serverSettings";

import { popularProducts } from "../../data";

import * as Style from './style'

const Products = ({ showButton = true }) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ usersPerPage ] = useState( 8 );

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

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const showProducts = getAllProducts.slice( firstUserIndex, lastUserIndex )
  
  const paginate = pageNumber => setCurrentPage( pageNumber )

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
              <ProductItem data={ item } key={ item._id } />
            )
          })
        }
        {/* {
          popularProducts.map((item) => {
            return (
              <ProductItem data={ item } key={ item.id } />
            )
          })
        } */}
      </div>

        <Pagination
          usersPerPage={ usersPerPage }
          totalUsers={ getAllProducts.length }
          paginate={ paginate }
          currentPage={ currentPage }
        />

      {/* { showButton && (
        <MainButton
          text={ 'Show All' }
          backgroundColor={ '#fff' }
          color={ '#000' }
          border={ '1px solid #000' }
          fontSize={ '18px' }
          width={ '160px' }
          link={ true }
        />
      ) } */}
    </Style.ProductsWrap>
  );
};

export default Products;
