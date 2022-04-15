import styled from "styled-components";

const Info = styled.div`
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
  background-color: #f5fbfd;
  position: relative;
  transition: all .5s;
  //flex: 24%;
  min-width: 300px;
  max-height: 300px;
  margin-bottom: 10px;

  &:hover ${Info}{
    opacity: 1;
    transition: all .5s;
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  }

  .product-image {
    height: 60%;
    z-index: 2;
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

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 24%;
  margin: 5px 5px 20px;
  min-width: 280px;

  .add-to-cart {
    border: none;
    background-color: none;
    text-decoration: underline;
    background-color: unset;
    font-weight: bold;
    cursor: pointer;
  }

`

export { Product, Info, FullScreenImage, Title, Price, ProductWrapper };
