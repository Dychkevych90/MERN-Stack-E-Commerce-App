import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import ServerSettings from "../../services/serverSettings";

import {
  Button,
  Amount,
  AddContainer,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  AmountContainer,
  FilterTitle,
  Wrapper,
  Title,
  Price,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
} from './styled';

const Product = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      const server = new ServerSettings();

      try {
        const res = await axios.get(`${server.getApi()}products/find/${id}`);
        setProduct(res.data);
      } catch(err) {
        console.log(err)
      }
    };
    getProduct();
  }, [ id ]);

  return (
    <div className="container">
      <Wrapper>
        <div className="in-development">In development</div> 
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{ product.title }</Title>
          <Desc>
            { product.desc }
          </Desc>
          <Price>$ { product.price }</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter> */}
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <div>remove</div>
              <Amount>1</Amount>
              <div>add</div>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </div>
  );
};

export default Product;