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

  .center {
    font-weight: bold;
    font-size: 25px;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      text-transform: uppercase;
      border: none;
      background-color: transparent;
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
      font-weight: 500;
    }
    .cart_btn {
      margin-right: 0;
      svg {
        width: 20px;
        height: 20px;
      }
    }
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
