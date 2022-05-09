import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCart } from "../../redux-store/action";

import CONSTANTS from '../../constants/icons';

import * as Style from "./styled";
import CheckoutDialog from "../../components/dialogs/checkout/checkout";

const { AddIcon, RemoveIcon, DeleteOutlineIcon } = CONSTANTS;

const Cart = () => {
  const [ totalSum, setTotalSum ] = useState([]);
  const [ showCheckoutModal, setShowCheckoutModal ] = useState(false)
  const getCartItems = useSelector( ( state ) => state.cart );
  const currentUser = useSelector( (state) => state.user );
  const dispatch = useDispatch();

  useEffect( () => {
    const getAllSum = getCartItems.map(u => parseFloat(u.price) * parseFloat(u.quantity))
    const totalSumma = getAllSum.reduce((a, b) => a + b, 0)
    setTotalSum( totalSumma )
  })

  const deleteItem = ( id ) => {
    const index = getCartItems.findIndex( item => item._id === id);
    const newData = [...getCartItems.slice(0, index), ...getCartItems.slice(index + 1)];

    dispatch( setCart( newData ) );
  }

  const plusItem = ( id ) => {
    const index = getCartItems.findIndex( item => item._id === id);

    const old = getCartItems[index];
    const newItem = {...old, quantity: old.quantity +1}

    const newData = [...getCartItems.slice(0, index), newItem, ...getCartItems.slice(index + 1)];

    dispatch( setCart( newData ) );
  }

  const minusItem = ( id ) => {
    const index = getCartItems.findIndex( item => item._id === id);

    const old = getCartItems[index];
    const newItem = {...old, quantity: old.quantity -1}

    const newData = [...getCartItems.slice(0, index), newItem, ...getCartItems.slice(index + 1)];

    dispatch( setCart( newData ) );
  }

  return (
    <div className="container">
      <Style.Wrapper>
        <Style.Title>YOUR BAG</Style.Title>
        <Style.Top>
          <Style.TopButton>CONTINUE SHOPPING</Style.TopButton>
          <Style.TopTexts>
            <Style.TopText>Shopping Bag( {getCartItems.length} )</Style.TopText>
            <Style.TopText>Your Wishlist (0)</Style.TopText>
          </Style.TopTexts>
          {/* <Style.TopButton type="filled">CHECKOUT NOW</Style.TopButton> */}
        </Style.Top>
        <Style.Bottom>
          <Style.Info>
            { getCartItems.map( ( item ) => {
              return (
                <Style.Product key={item._id}>
                  <Style.ProductDetail>
                    <Style.Image src={ item.img } />
                    <Style.Details>
                      <Style.ProductName>
                        <b>Product:</b> { item.title }
                      </Style.ProductName>
                      <Style.ProductId>
                        <b>ID:</b> { item._id.toUpperCase() }
                      </Style.ProductId>
                      <Style.ProductColor color={ item.color } />
                      <Style.ProductSize>
                        <b>Categories:</b> { item.categories.join(', ') }
                      </Style.ProductSize>
                    </Style.Details>
                  </Style.ProductDetail>
                  <Style.PriceDetail>
                    <Style.ProductAmountContainer>
                      <Style.ProductAmount>
                        <button onClick={ () => plusItem(item._id)}><AddIcon/></button>
                        <span>{ item.quantity }</span>
                        <button onClick={ () => minusItem(item._id)} disabled={ item.quantity === 1 }><RemoveIcon/></button>
                      </Style.ProductAmount>
                    </Style.ProductAmountContainer>
                    <Style.ProductPrice>$ { item.quantity * item.price }</Style.ProductPrice>
                  </Style.PriceDetail>

                  <button
                    onClick={ () => deleteItem(item._id)}
                    className={'delete-btn'}
                  >
                    <DeleteOutlineIcon/>
                  </button>

                </Style.Product>
              );
            })}
          </Style.Info>
          <Style.Summary>
            <Style.SummaryTitle>ORDER SUMMARY</Style.SummaryTitle>
            {
              getCartItems.map( ( item ) => {
                return(
                  <Style.SummaryItem key={item._id} >
                    <Style.SummaryItemText>{ item.title }</Style.SummaryItemText>
                    <Style.SummaryItemPrice>$ { item.quantity * item.price }</Style.SummaryItemPrice>
                  </Style.SummaryItem>
                )
              })
            }
            <input type={'hidden'} value={ currentUser._id } />
            <Style.SummaryItem type="total">
              <Style.SummaryItemText>Total</Style.SummaryItemText>
              <Style.SummaryItemPrice>$ { totalSum }</Style.SummaryItemPrice>
            </Style.SummaryItem>
            <Style.Button onClick={() => setShowCheckoutModal(true)}>CHECKOUT NOW</Style.Button>
          </Style.Summary>
        </Style.Bottom>
      </Style.Wrapper>

      {
        showCheckoutModal && (
          <CheckoutDialog
            setShowCheckoutModal={setShowCheckoutModal}
            totalSum={totalSum}
          />
        )
      }

    </div>
  );
};

export default Cart;
