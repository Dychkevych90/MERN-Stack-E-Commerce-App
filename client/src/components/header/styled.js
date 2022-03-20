import styled from "styled-components";

const Header = styled.header`
  height: 60px;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;

  .left {
    @media (max-width: 725px){
      display: none;
    }
  }

  .center {
    font-weight: bold;
    font-size: 25px;
    text-decoration: none;
    color: inherit;

    @media (max-width: 500px){
      font-size: 22px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-transform: uppercase;
      border: none;
      background-color: transparent;
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
      font-weight: 500;
      text-decoration: none;
      color: #000;

      @media (max-width: 500px){
      font-size: 12px;
      }
    }
    .cart_btn {
      margin-right: 20px;
    }

    & .icon {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
  }

  @media (max-width: 500px){
    padding: 0;
  }
`;

const SearchBar = styled.form`
  max-width: 250px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid lightgrey;

  .input {
    border: none;
    border-radius: 4px;
    width: 100%;
    padding: 5px 20px;
    outline: none;
  }
  .icon {
    position: absolute;
    right: 5px;
    width: 20px;
    fill: grey;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export { 
  Header, 
  SearchBar 
};
