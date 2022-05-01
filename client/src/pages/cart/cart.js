import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CONSTANTS from '../../constants/icons';

import * as Style from "./styled";

const { AddIcon, RemoveIcon } = CONSTANTS;

const Cart = () => {
  const [ count, setCount ] = useState( 1 );
  const [ totalSum, setTotalSum ] = useState('');
  const getCartItems = useSelector( ( state ) => state.cart );

  useEffect(()=> {
    const getAllSum = getCartItems.map(u => parseFloat(u.price))
    const totalSumma = getAllSum.reduce((a, b) => a + b, 0)
    setTotalSum(totalSumma)
  })

  useEffect(() => {
    
  })

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
          <Style.TopButton type="filled">CHECKOUT NOW</Style.TopButton>
        </Style.Top>
        <Style.Bottom>
          <Style.Info>
            { getCartItems.map( ( item ) => {
              console.log(item)
              return (
                <Style.Product>
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
                        <button onClick={() => setCount(count + 1)}><AddIcon/></button>
                        <span>{ count }</span>
                        <button onClick={() => setCount(count - 1)} disabled={ count === 1 }><RemoveIcon/></button>
                      </Style.ProductAmount>
                    </Style.ProductAmountContainer>
                    <Style.ProductPrice>$ { count * item.price }</Style.ProductPrice>
                  </Style.PriceDetail>
                </Style.Product>
              );
            })}
            {/* <Style.Product>
              <Style.ProductDetail>
                <Style.Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Style.Details>
                  <Style.ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </Style.ProductName>
                  <Style.ProductId>
                    <b>ID:</b> 93813718293
                  </Style.ProductId>
                  <Style.ProductColor color="black" />
                  <Style.ProductSize>
                    <b>Size:</b> 37.5
                  </Style.ProductSize>
                </Style.Details>
              </Style.ProductDetail>
              <Style.PriceDetail>
                <Style.ProductAmountContainer>
                  <Style.ProductAmount>2</Style.ProductAmount>
                </Style.ProductAmountContainer>
                <Style.ProductPrice>$ 30</Style.ProductPrice>
              </Style.PriceDetail>
            </Style.Product>
            <Style.Hr />
            <Style.Product>
              <Style.ProductDetail>
                <Style.Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Style.Details>
                  <Style.ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </Style.ProductName>
                  <Style.ProductId>
                    <b>ID:</b> 93813718293
                  </Style.ProductId>
                  <Style.ProductColor color="gray" />
                  <Style.ProductSize>
                    <b>Size:</b> M
                  </Style.ProductSize>
                </Style.Details>
              </Style.ProductDetail>
              <Style.PriceDetail>
                <Style.ProductAmountContainer>
                  <div>add</div>
                  <Style.ProductAmount>1</Style.ProductAmount>
                  <div>remove</div>
                </Style.ProductAmountContainer>
                <Style.ProductPrice>$ 20</Style.ProductPrice>
              </Style.PriceDetail>
            </Style.Product> */}
          </Style.Info>
          <Style.Summary>
            <Style.SummaryTitle>ORDER SUMMARY</Style.SummaryTitle>
            {
              getCartItems.map( ( item ) => {
                return(
                  <Style.SummaryItem>
                    <Style.SummaryItemText>{ item.title }</Style.SummaryItemText>
                    <Style.SummaryItemPrice>$ { item.price }</Style.SummaryItemPrice>
                  </Style.SummaryItem>
                )
              })
            }
            <Style.SummaryItem type="total">
              <Style.SummaryItemText>Total</Style.SummaryItemText>
              <Style.SummaryItemPrice>$ { totalSum }</Style.SummaryItemPrice>
            </Style.SummaryItem>
            <Style.Button>CHECKOUT NOW</Style.Button>
          </Style.Summary>
        </Style.Bottom>
      </Style.Wrapper>
    </div>
  );
};

export default Cart;
