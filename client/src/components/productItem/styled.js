import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled(Link)`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    border: none;

    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: #f5fbfd;
  position: relative;
  transition: all .5s;
  //flex: 24%;
  min-width: 300px;
  max-height: 300px;
  margin-bottom: 10px;
  min-height: 300px;

  /* &:hover ${Info}{
    opacity: 1;
    transition: all .5s;
  } */

  &:hover {
    .product-image {
      transform: scale(1.3);
      transition: .5s;
    }
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #f5fbfd;
    position: absolute;
  }

  .product-image {
    height: 60%;
    z-index: 2;
    transition: .5s;
    border-radius: 50%;
  }
`;

const FullScreenImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0,0,0,.8);
  transition: all .5s;
  z-index: 100;
  
  img {
    width: 50%;
    object-fit: contain;
    max-height: 80%;
  }

  .close-button {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    min-width: 40px;
    position: absolute;
    right: 10%;
    top: 10%;
    cursor: pointer;
  }
`

const Price = styled.div`
  color: teal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
`

const Title = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 24%;
  margin: 5px;
  min-width: 280px;
  box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 13%);
  border-radius: 5px;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 450px;

  .add-to-cart {
    border: none;
    background-color: none;
    text-decoration: underline;
    background-color: unset;
    font-weight: bold;
    cursor: pointer;
  }

  .add-to-favorite {
    position: absolute;
    background-color: unset;
    border: none;
    right: 15px;
    top: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    z-index: 10;

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: ${props => props.favorite && 'red'};
      }
    }

    &:hover svg path {
      fill: red;
    }
  }

`

export { Product, Info, FullScreenImage, Title, Price, ProductWrapper };
