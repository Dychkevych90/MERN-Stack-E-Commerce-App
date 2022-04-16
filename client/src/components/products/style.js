import styled from "styled-components";
import bg from '../../media/image/hu477.jpg'

const ProductsWrap = styled.div`
  background-color: #fff;
  padding-bottom: 20px;
  text-align: center;

  .products-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    margin: 100px 0 40px;
    background-image: url(${bg});
    background-size: cover;
    background-attachment: fixed;
    background-position: right;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.2);
    }

    span {
      font-weight: bold;
      font-size: 14px;
      padding-bottom: 10px;
    }

    div {
      font-size: 40px;
      font-weight: 900;
    }
  }

  .products-section {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export { ProductsWrap };
