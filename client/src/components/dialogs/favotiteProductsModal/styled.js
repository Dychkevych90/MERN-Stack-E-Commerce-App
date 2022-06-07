import styled from 'styled-components';

const FavoriteProductsDialogsWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 5px 19px -2px rgba(0,0,0,0.78);
`

const FavoriteItemWrap = styled.div`
  display: flex;
  align-items: center;
  min-height: 20px;
  padding: 2px;

  .image {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .rm-item {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export {
  FavoriteProductsDialogsWrapper,
  FavoriteItemWrap
}